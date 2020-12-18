var web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

const contract_address = "0x7381a4d55D8A466c13bf1b2ba1f317e02b64aE1F";
const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "Deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "auctionBidding",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "auctionEnd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "balanceTransfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "changeItemOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllAuctionedItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Itemname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Owner",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "start_price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limit_price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "ended",
						"type": "bool"
					},
					{
						"internalType": "address payable",
						"name": "add",
						"type": "address"
					}
				],
				"internalType": "struct IAuction.AuctionItem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllEndedAuctionedItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Itemname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Owner",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "start_price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limit_price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "ended",
						"type": "bool"
					},
					{
						"internalType": "address payable",
						"name": "add",
						"type": "address"
					}
				],
				"internalType": "struct IAuction.AuctionItem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyItems",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "receiver",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refreshTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "start_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "limit_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "registerAuctionItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "registerItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "registerName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
let contract = new web3.eth.Contract(abi, contract_address);


$(document).ready(function() {
	startDapp();
})

var startDapp = async function() {
	getMyItems();
	getRegisteredAuctionItems();
	getClosedAuctionItems();
	getMyItemsToBeAuctioned();
	getItemsRegisteredAtAuction();
	getName();
}


var getBalance = async function() {
	var address = await $('#address').text();
	var name = await contract.methods.getName().call({from:address});
	web3.eth.getBalance(address, function (error, balance) {
		if (!error){
			$('#balanceAmount').text(web3.utils.fromWei(balance,'ether'));
		}else
			console.log('error: ', error);
	});
	
}

var getName = async function() {
	var address = await $('#address').text();
	var name = await contract.methods.getName().call({from:address});
	$('#name').text(name);
}



var registerName = async function() {
	var address = await $('#address').text();
	var name = await document.getElementById('change_name').value;
	try{
		await contract.methods.registerName(name).send({from : address});
	}
	catch(err){
		alert(err);
	}
}

var registerForMyItem = async function() {
	var address = await $('#address').text();
	var item = await document.getElementById('Item').value;
	
	try{
		await contract.methods.registerItem(item).send({from:address});
	
	}
	catch(err){
		alert(err);
	}
}
var getMyItemsToBeAuctioned = async function() {
	var address = await $('#address').text();
	var items = await contract.methods.getMyItems().call({from:address});
	// items = items.split(",")
	for(var i=0 ; i<items.length ; i++)
	{
		if(items[i] == "" || items[i] == " ")
		{
			continue;
		}
		option_value = items[i];
		option_text = items[i];
		$('#myitems-category').append('<option value="'+ option_value +'">'+ option_text +'</option>');
	}

}
var registerAuctionItem = async function() {
	await document.getElementById('change_name').value;
	var address = await $('#address').text();
	var items = await document.getElementById('myitems-category').value;
	var startingBidPrice = await document.getElementById('startingBidPrice').value;
	var upperLimitPrice = await document.getElementById('upperLimitPrice').value;
	var dueDate = await document.getElementById('dueDate').value;
	try{
		await contract.methods.registerAuctionItem(items,startingBidPrice,upperLimitPrice,dueDate).send({from:address, gas:5000000});
	}
	catch(err){
		alert(err)
	}
}

var auctionBidding = async function() {
	var address = await $('#address').text();
	var item = await document.getElementById('auction-category').value;
	item = String(item).split('/'); //item[0]에 아이템 이름 들어감
	var bidprice = await document.getElementById('bidPrice').value;
	try{
		await contract.methods.auctionBidding(item[0],item[1]).send({from:address,gas:5000000, value : bidprice*Math.pow(10,18)});
	}
	catch(err){
		alert(err);
	}
}

var getMyItems = async function() {
	var address = await $('#address').text();
	var items = new Array(); //배열선언
	items.push(await contract.methods.getMyItems().call({from:address}));
	// items = String(items).split(',');
	// for(var i=0;i<items.length;i++){
	// 	if(items[i] == "" || items[i] == "  ")
	// 	{
	// 		items.splice(i,1);
	// 		i=0;
	// 	}
	// }
	// items.shift();
	$('#myItems').text(items);
}

var getRegisteredAuctionItems = async function() {
	var address = await $('#address').text();
	// await contract.methods.refreshTime().send({from:address});
	var AuctionItemInfo = await contract.methods.getAllAuctionedItems().call({from:address});
	for(var i =0; i<AuctionItemInfo.length ; i++)
	{
		if(AuctionItemInfo[i][7] == true){
			continue;
		}
		var rowItem = "<tr>"
		for(var j=0 ; j<AuctionItemInfo[i].length-4; j++){
			var element = AuctionItemInfo[i][j];
			rowItem += "<th>"+element+"</th>";
		}
		rowItem += "</tr>"
		$('#registeredCars').append(rowItem)
	}
	
}

var getClosedAuctionItems = async function() {
	var address = await $('#address').text();
	var ClosedItemInfo = await contract.methods.getAllEndedAuctionedItems().call({from:address});
	for(var i =0; i<ClosedItemInfo.length ; i++)
	{
		var rowItem = "<tr>"
		for(var j=0 ; j<ClosedItemInfo[i].length-6 ; j++){
			var element = ClosedItemInfo[i][j];
			rowItem += "<th>"+element+"</th>";
		}
		rowItem += "</tr>"
		$('#carsOnSale').append(rowItem)
	}
}



var getItemsRegisteredAtAuction = async function() {
	var address = await $('#address').text();
	var AuctionItemInfo = await contract.methods.getAllAuctionedItems().call({from:address});
	for(var i=0 ; i<AuctionItemInfo.length ; i++)
	{
		if(AuctionItemInfo[i][7] == true){
			continue;
		}
		var option_value = AuctionItemInfo[i][0];
		option_value += "/";
		option_value += AuctionItemInfo[i][1];

		var option_text = AuctionItemInfo[i][0];
		option_text += "/" ;
		option_text += AuctionItemInfo[i][1];

		$('#auction-category').append('<option value="'+ option_value +'">'+ option_text +'</option>');
	}
}