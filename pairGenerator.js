const NodeRSA = require('node-rsa'),
    fs = require('fs');

function generateKeys() {
    const key = new NodeRSA().generateKeyPair();

    const publicKey = key.exportKey('public'),
        privateKey = key.exportKey('private');

    const fdPublic = fs.openSync('./keys/public.pem', 'w');
    fs.writeSync(fdPublic, publicKey, 'utf8');

    const fdPrivate = fs.openSync('./keys/private.pem', 'w');
    fs.writeSync(fdPrivate, privateKey, 'utf8');
}

generateKeys();