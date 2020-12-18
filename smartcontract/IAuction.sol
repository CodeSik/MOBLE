pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./SafeMath.sol";

contract IAuction{
    
    address payable public receiver;
    mapping (address => uint) balances;
    
    function Deposit() public payable{
        balances[msg.sender] += msg.value;
    }
  

    struct User{
        string Name; // User's Name
        string[] Items; // Items
    }
    
    struct AuctionItem{
        
        string Itemname; // Item's name
        string Owner;
        uint start_price;
        uint limit_price;
        uint remaining; // minutes
        uint limitTime;
        uint startTime;
        bool ended;
        address payable add;
    }
    
    AuctionItem[] EndedItems;
    AuctionItem[] AuctionItems;
    
    mapping(address => User) users;

    
  



    function registerAuctionItem(string memory item, uint start_price, uint limit_price, uint date) public{
        require(start_price < limit_price, "start_price is higher than limit_price");
        AuctionItems.push(AuctionItem(item,users[msg.sender].Name, start_price, limit_price,date,date,now,false,msg.sender));
        uint index = 0;
        for(uint i = 0 ; i<users[msg.sender].Items.length ; i++)
        {
            if(stringsEqual(users[msg.sender].Items[i],item))
            {
                index = i;
                break;
            }
        }
        delete users[msg.sender].Items[index];
    }
    
    function registerItem(string memory name) public{
        users[msg.sender].Items.push(name);
    }
    
    function registerName(string memory name) public{
        users[msg.sender].Name = name;
        
    }
    
    function getName() public view returns(string memory){
        return users[msg.sender].Name;
    }
    

   function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
       bytes storage a = bytes(_a); 
       bytes memory b = bytes(_b); 
       if (a.length != b.length) {
            return false; // @todo unroll this loop 
       }
       for (uint i = 0; i < a.length; i ++) {
           if (a[i] != b[i]) return false; 
       }
       return true; 
       
   }
    
    function auctionBidding(string memory item, string memory name) payable public{
        refreshTime();
        uint index = 0;
        for(uint i = 0 ; i<AuctionItems.length ;i++){
            if(stringsEqual(AuctionItems[i].Itemname,item)&& stringsEqual(AuctionItems[i].Owner,name) && AuctionItems[i].ended==false){
                      index = i;
            }
        }

        // require(AuctionItems[index].remaining != 0);
        require(msg.value/(1 ether) > AuctionItems[index].start_price);
        require(!stringsEqual(AuctionItems[index].Owner,users[msg.sender].Name));
        

        if(msg.value/(1 ether)<AuctionItems[index].limit_price){
            AuctionItems[index].start_price = msg.value/(1 ether);
            balanceTransfer(msg.sender);
        }
        else if (AuctionItems[index].remaining == 0){
            balanceTransfer(msg.sender);
            users[AuctionItems[index].add].Items.push(AuctionItems[index].Itemname);
            auctionEnd(index);
        }
        else if(msg.value/(1 ether) >= AuctionItems[index].limit_price){
            address payable seller = AuctionItems[index].add;

            AuctionItems[index].limit_price = msg.value/(1 ether);
            AuctionItems[index].start_price = msg.value/(1 ether);
            balanceTransfer(seller);
            changeItemOwner(index);
            auctionEnd(index);
        }
            
            
    }
    
    

    function balanceTransfer(address payable _receiver) public{
        Deposit();
        _receiver.transfer(balances[msg.sender]);
        balances[msg.sender] = 0;
    }
    
    
    
    function auctionEnd(uint index) public{
        EndedItems.push(AuctionItems[index]);
        AuctionItems[index].ended = true;
    }
    
    
    function changeItemOwner(uint index) public{
        AuctionItems[index].Owner = users[msg.sender].Name;
        AuctionItems[index].add = msg.sender;
        users[msg.sender].Items.push(AuctionItems[index].Itemname);
         
    }
    
    function getMyItems() public view returns(string[] memory){
        return users[msg.sender].Items;
    }
 
    function getAllAuctionedItems() public view returns(AuctionItem[] memory ){
        return AuctionItems;
    }
    function refreshTime() public {
        for(uint i =0 ; i < AuctionItems.length ; i++){
            if(AuctionItems[i].remaining < (now - AuctionItems[i].startTime) && AuctionItems[i].ended == false){
                AuctionItems[i].remaining = 0;
                auctionEnd(i);
                users[AuctionItems[i].add].Items.push(AuctionItems[i].Itemname);
            }
            
            else{
                AuctionItems[i].remaining = AuctionItems[i].limitTime - ((now - AuctionItems[i].startTime));
            }
        }
    }
    
    
    function getAllEndedAuctionedItems() public view returns(AuctionItem[] memory){
        return EndedItems;
    }
}