const NodeRSA = require('node-rsa'),
    fs = require('fs');

const publicKey = new NodeRSA(),
    privateKey = new NodeRSA();

const public = fs.readFileSync('./keys/public.pem', 'utf8'),
    private = fs.readFileSync('./keys/private.pem', 'utf8');

publicKey.importKey(public);
privateKey.importKey(private);

function encryptFile() {
    const message = fs.readFileSync("./data.txt", "utf8");

    const encrypted = privateKey.encryptPrivate(message, 'base64');
    console.log(encrypted)
    return encrypted;
}

function decryptFile() {
    const decrypted = publicKey.decryptPublic(encryptFile(), 'utf8')
    console.log(decrypted)
}

decryptFile()