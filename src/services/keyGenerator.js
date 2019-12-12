const EC = require('elliptic').ec;
const ec = EC('secp256k1');

const key = ec.genKeyPair();

const privateKey = key.getPrivate('hex');
const publicKey = key.getPublic('hex');

console.log();
console.log('private key: ' + privateKey);

console.log();
console.log('Public key: ' + publicKey);
