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

beccaChain.chain[1].transaction[0].amount = 1;
console.log('Is chain valid? ' + beccaChain.isChainValid());
