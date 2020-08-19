const fs = require('fs');


function getImgBase64() {
  fs.readFile('../image/timg.gif',  (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(data.length/1024);
      let base64 = 'data:image/png;base64,' + data.toString('base64');
      console.log(base64);
      return base64
    }
  });
}
getImgBase64();

function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return global.btoa(binary);
}
