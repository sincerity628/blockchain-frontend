const sha256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = EC('secp256k1');

class Transaction {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.timestamp = Date.now();
  }

  calculateHash() {
    return sha256(this.from + this.to + this.amount).toString();
  }

  signTransaction(signKey) {
    if(signKey.getPublic('hex') !== this.from) {
      console.log('can not sign to this transaction.');
      return;
    }

    const hash = this.calculateHash();
    const sig = signKey.sign(hash, 'base64');

    this.signature = sig.toDER('hex');
  }

  isValid() {
    // the miner's award
    if(this.from === null) return true;

    if(!this.signature || this.signature.length === 0) {
      console.log('no signature in this transaction.');
      return;
    }

    const publicKey = ec.keyFromPublic(this.from, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

module.exports.Transaction = Transaction;
