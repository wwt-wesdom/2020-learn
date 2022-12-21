// 遍历所有的文件
var fs = require("fs");
// 拿到需要遍历的路径

// 使用异步获取路径
// 参数是遍历文件的根路径
var arr = [];
function readDirSync(path){
  return new　Promise((resolve, reject) => {
    var pa = fs.readdirSync(path);
    // 循环遍历当前的文件以及文件夹
    pa.forEach(function(ele,index){
      var info = fs.statSync(path+"/"+ele);
      if(info.isDirectory()){
        readDirSync(path+"/"+ele);
      }else{
        var filePath = path +'/'+ ele;
        // 找到 .css .html .js 文件
        // let fileNameReg = /\.css|\.js|\.html|\.htm/g;
        let fileNameReg = /\.html|\.htm/g;
        let shouldFormat = fileNameReg.test(filePath);
        if (shouldFormat) {
          // 这里就拿到了符合条件的文件路径，后面就可以根据这个路径来执行相关的操作
          let routerArr = path.split('2020-learn/')
          let router = routerArr[1] ? routerArr[1] + '/' : ''
          arr.push(router + ele)
        }
      }
    });
    console.log(arr);
    resolve(arr)
  })
}
module.exports = {
  readDirSync: readDirSync
};
