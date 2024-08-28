const path = require('node:path');
const os = require('node:os');
const {execSync, exec, spawn, execFile, fork} = require('child_process');

// resolve 用于将给定的路径转化为绝对路径
const p1 = path.resolve(__dirname, 'index.js')
// console.log(p1);

// extname 返回后缀名
// console.log(path.extname(p1));

// console.log(path.parse(p1));

// 拼接地址
// console.log(path.join('../nodeServer', 'index.js'));

// 返回文件所在目录名
// console.log(path.dirname(p1));

// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.arch());
// console.log(os.networkInterfaces());
// console.log(os.cpus());


// console.log(process.arch);
// console.log(process.cwd());
// console.log(process.argv);
// console.log(process.memoryUsage());


// exec('node -v', function (err, stdout, stderr) {
//   if (err) {
//     return  err;
//   }
//   console.log(stdout);
// })
//
// const nodeVersion = execSync('node -v')
// console.log('sync', nodeVersion.toString());

// const {stdout} = spawn('netstat', ['-a'], {
//
// })
//
// stdout.on('data', data => {
//   console.log(data.toString());
// })
//
// stdout.on('close', data => console.log(data, '结束了'))
// execFile(path.resolve(process.cwd(), './bat.cmd'), null, (err, stdout, stderr) => {
//   console.log(stdout.toString());
// })

// const testProcess = fork('./test1/test.js')
//
// testProcess.send('我是主进程')
//
// testProcess.on('message', data => {
//   console.log('我是主进程接受消息111：',data)
// })

/*const execa = require('execa');

async function runCommand() {
  try {
    const { stdout } = await execa('ls', ['-l', '-a'], { cwd: '/path/to/directory' });
    console.log('命令执行结果：', stdout);
  } catch (error) {
    console.error('命令执行失败：', error);
  }
}

runCommand();*/

/*const EventEmitter = require('events');
const event = new EventEmitter();
event.on('test', (data) => {
  console.log(data);
})

event.on('test1', (data) => {
  console.log(data);
})

event.emit('test', 'xxxxxxxxxxxxxxxxx');
event.emit('test1', '1111111111111');*/


const fs =  require('node:fs');
const fs2 =  require('node:fs/promises');

/*
fs2.readFile('test.txt', 'utf8').then(data => {
  console.log(data.toString());
})

fs.readFile('test.txt', 'utf8', (err, data) => {
  console.log(data.toString());
})

let txt = fs.readFileSync('test.txt', 'utf8');
console.log(txt.toString(), 1);
*/

/*const readStream = fs.createReadStream('./test.txt', {encoding: 'utf8'});

readStream.on('data', (chunk) => {
  console.log(chunk);
})

readStream.on('end', () => {
  console.log('close');
})*/

/*fs.mkdir('./test3',{recursive: true}, (err) => {

})*/

// fs.renameSync('./test1.txt', './test2.txt');

/*
fs.watch('./test2.txt', function(event, filename) {
  console.log(event, filename);
})
*/

fs.writeFileSync('./test2.txt', '\n22222222222', {flag: 'a'});









