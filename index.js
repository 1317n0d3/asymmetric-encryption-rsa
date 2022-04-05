const NodeRSA = require('node-rsa'),
    fs = require('fs');

// const message = fs.readFileSync("./data.txt", "utf8");

const message = 'test message';

const public_key_data = '-----BEGIN RSA PUBLIC KEY----- ... -----END RSA PUBLIC KEY-----';
const private_key_data = '-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----';

const public_key = new NodeRSA({public_key_data}, 'pkcs1');
const private_key = new NodeRSA({private_key_data}, 'pkcs1');

// Sign and encrypt
const sign = private_key.sign(message, 'base64', 'utf8');
console.log ('Private key sign:', sign);

const encrypted = public_key.encrypt(sign, 'base64', 'utf8');
console.log ('Public key encryption:', encrypted);

// Decrypt and verify
const decrypted = public_key.decrypt(encrypted, 'utf8');
console.log ('Private key decryption:', decrypted);

const verify = public_key.verify(message, decrypted, 'utf8', 'base64');
console.log ('Проверка открытого ключа:', verify);