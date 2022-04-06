const NodeRSA = require('node-rsa'),
    fs = require('fs');

function generateKeys(keyPath) {
    const key = new NodeRSA().generateKeyPair();

    const publicKey = key.exportKey('public'),
        privateKey = key.exportKey('private');

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