// 遍历所有的文件
var fs = require("fs");
const path = require('path')
// 拿到需要遍历的路径

// 使用异步获取路径
// 参数是遍历文件的根路径
function readDirSync(dir){
  return new　Promise((resolve, reject) => {
    const res = getHtmlFilePaths(dir);
    resolve(res)
  })
}

function getHtmlFilePaths(dir) {
  const htmlFilePaths = [];
  function traverseDirectory(currentDir) {
    // 找出指定目录下所有的文件和文件夹
    const files = fs.readdirSync(currentDir);
    files.forEach(file => {
      // const filePath = path.join(currentDir, file);
      const filePath = `${currentDir}/${file}`;
      const fileStat = fs.statSync(filePath);
      if (fileStat.isDirectory()) {
        traverseDirectory(filePath); // 递归遍历子目录
      } else if (fileStat.isFile() && path.extname(filePath) === '.html') {
        const htmlPath = filePath.split('2020-learn/')[1]
        htmlFilePaths.push(htmlPath);
      }
    });
  }

  traverseDirectory(dir);
  return htmlFilePaths;
}


module.exports = {
  readDirSync: readDirSync
};

/* var pa = fs.readdirSync(path);
    // 循环遍历当前的文件以及文件夹
    pa.forEach(function(ele,index){
      var info = fs.statSync(path+"/"+ele);
      if(info.isDirectory()){
        readDirSync(path + "/" + ele).then();
      }else{
        var filePath = path +'/'+ ele;
        // 找到 .css .html .js 文件
        // let fileNameReg = /\.css|\.js|\.html|\.htm/g;
        let fileNameReg = /\.html|\.htm/g;
        let shouldFormat = fileNameReg.test(filePath);
        if (shouldFormat) {
          // 这里就拿到了符合条件的文件路径，后面就可以根据这个路径来执行相关的操作
          // console.log(path);
          let routerArr = path.split('2020-learn/')
          let router = routerArr[1] ? routerArr[1] + '/' : ''
          arr.push(router + ele)
        }
      }
    });*/