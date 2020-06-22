define(function (require, exports, module) {
  const res = require('./AMD-requirejs-export');
  console.log(res);
  res.methods.getTotalNum(5);
});
