const path = require('path')
function getNodeModules(from) {
  // nmChars存储node_modules 每一个字母的charCode的倒排 115 = s; 110 = n
  const nmChars = [115, 101, 108, 117, 100, 111, 109, 95, 101, 100, 111, 110];
  const nmLen = nmChars.length;
  let CHAR_FORWARD_SLASH = 47; // 47 === /
  // from = path.resolve(from)
  if (from === '/')
    return ['/node_modules'];
  const paths = [];
  let p = 0;
  let last = from.length;
  for (let i = from.length - 1; i >= 0; --i) {
    const code = from.charCodeAt(i)
    if (code === CHAR_FORWARD_SLASH) {
      if (p !== nmLen)
        paths.push(from.slice(0, last) + '/node_modules');
      last = i;
      p = 0
    } else if (p !== -1){
      // 遇到node_modules 跳过
      if (nmChars[p] === code) {
        ++p
      } else {
        p = -1
      }
    }
  }
  paths.push('/node_modules')
  return  paths
}

let pathStr = '/zhongzhuo2/creator-platform/src/node_modules/views/shortVideo'

console.log(getNodeModules(pathStr));