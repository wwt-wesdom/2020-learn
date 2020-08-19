const crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('hello world');
console.log(hash.digest('hex'));
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  let crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

let data = 'Hello, this is a secret message!';
let key = 'Password!';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);
