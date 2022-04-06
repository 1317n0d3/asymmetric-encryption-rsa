const prompt = require("prompt"),
    app = require('./app'),
    path = require('path');

console.log(`
    1.Generate key pair
    2.Encrypt with public key
    3.Encrypt with private key
    4.Decrypt with public key
    5.Decrypt with private key
    `)

prompt.start()

prompt.get(['mode', 'keyPath'], function (err, result) {
    app.execute(result.mode, path.resolve(result.keyPath))
});