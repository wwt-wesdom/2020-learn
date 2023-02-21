// 不要忘记写相对目录，不然node会在系统模块中找hello.js
/*
const hello = require('./hello.js');
let b = hello.sum(100);
console.log(b);
//将在下一轮事件轮询中使用
process.nextTick(function () {
  console.log('下一轮事件轮询中执行');
});
// 程序即将退出时的回调函数:
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});
*/
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const {readDirSync} = require('./allmenu');
let root = path.resolve('../');

// let workDir = path.resolve('../'); // . 当前目录， ../上一级目录
// console.log(workDir);
// let filePath = path.join(workDir, 'image', 'timg.gif');
// console.log(filePath);
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string&name=test#hash'));
const server = http.createServer(function (request, response) {
  // 回调函数接收request和response对象,
  // 获得HTTP请求的method和url:
  // console.log(request.method + ': ' + request.url);
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  let pathname = url.parse(decodeURIComponent(request.url)).pathname;
  pathname = pathname === '/' || !pathname ? '/index.html' : pathname;
  let filepath = path.join(root, pathname);
  // response.writeHead(200, {'Content-Type': 'text/html'});
  // 将HTTP响应的HTML内容写入response:
  // response.end('<h1>Hello world!</h1>');
  console.log('pathname====', pathname);
  fs.stat(filepath, function (err, stats) {
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在:
      // console.log('200 ' + request.url);
      // 发送200响应:
      response.writeHead(200);
      // 将文件流导向response:
      if (pathname === '/index.html') {
        fs.readFile(filepath, 'utf-8', function (err, data) {//读取内容
          if (err) throw err;
          // response.writeHead(200, {"Content-Type": "text/html"});//注意这里
          readDirSync(root).then(res => {
            let result = '';
            res.forEach(item => {
              result += `<li><a href="./${item}">${item}</a></li>`
            });
            response.write('<!DOCTYPE html>\n' +
              '<html lang="en">\n' +
              '<head>\n' +
              '  <meta charset="UTF-8">\n' +
              '  <title>index</title>\n' +
              '</head>\n' +
              '<body>\n' +
              ' <div>\n' +
              '   <div>首页页面</div>\n' +
              '   <div id="app"><ul>' + result + '</ul></div>\n' +
              ' </div>\n' +
              '</body>\n' +
              '</html>\n');
            response.end();
          });
        });
      } else {
        console.log(filepath);
        console.log(response);
        fs.createReadStream(filepath).pipe(response);
      }
    } else {
      // 出错了或者文件不存在:
      // console.log('404 ' + request.url);
      // 发送404响应:
      response.writeHead(404);
      response.end('404 Not Found');
    }
  });
});
// 让服务器监听8089端口:
server.listen(8090);

console.log('Server is running at http://127.0.0.1:8090/');
