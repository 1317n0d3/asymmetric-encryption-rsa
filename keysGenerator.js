const NodeRSA = require('node-rsa'),
    fs = require('fs'),
    path = require('path');

function generateKeys(keyPath) {
    const key = new NodeRSA().generateKeyPair();

    const publicKey = key.exportKey('public'),
        privateKey = key.exportKey('private');

    // const fdPublic = fs.openSync('./keys/public.pem', 'w');
    // fs.writeSync(fdPublic, publicKey, 'utf8');
    //
    // const fdPrivate = fs.openSync('./keys/private.pem', 'w');
    // fs.writeSync(fdPrivate, privateKey, 'utf8');

    fs.mkdir(keyPath, { recursive: true }, (err) => {
        if (err) throw err;
        fs.writeFile(`${keyPath}/public.pem`, publicKey, (err) => {
            if (err) throw err;
            console.log('Public key is created successfully.');
        });
        fs.writeFile(`${keyPath}/private.pem`, privateKey, (err) => {
            if (err) throw err;
            console.log('Private key is created successfully.');
        });
    });
}

module.exports = {
    generateKeys
}