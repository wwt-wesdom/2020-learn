const {fork} = require('child_process');
const path = require('path')

const child = fork(path.resolve(__dirname, 'child-process.js'));
child.send('hello child process', () => {
  child.disconect()
});
child.on('message', (msg) => {
  console.log(msg);
})

console.log('father pid', process.pid);
let string = ""
JSON.parse("")