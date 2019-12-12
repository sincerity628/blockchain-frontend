const EC = require('elliptic').ec;
const ec = EC('secp256k1');
const { Blockchain } = require('../blockChain');
const { Transaction } = require('../transaction');

const beccaChain = new Blockchain();
const myKey = ec.keyFromPrivate('079428c87bbf98b5dadf1ad971f721c8ea5a6aef865f1ece3f6ccece081d31cc');
const walletAddress = myKey.getPublic('hex');

const trans = new Transaction(walletAddress, 'public address', 20);
trans.signTransaction(myKey);
beccaChain.addTransaction(trans);

console.log("Start the miner...");
beccaChain.mineTheTransactionQueue(walletAddress);
beccaChain.mineTheTransactionQueue(walletAddress);
console.log('The award of Xu is: ' + beccaChain.getBalence(walletAddress) + '.');

console.log(JSON.stringify(beccaChain, null, 3));
