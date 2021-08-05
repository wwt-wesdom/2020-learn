var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
};
define(function (require, exports, module) {
  "use strict";
  var service_config = require("service_config");
  var service_mygroup = require("../api/service_mygroup");
  var service_home = require("../api/service_home");
  var service_broad = require("../api/service_broad");
  var uploadPic = require("../../../api/api").uploadPic;
  var qrcode = require("qrcode");
  var moment = require("moment");
  var echarts = require("echarts");
  var tcDialog = require("../components/tcDialog");
  var service_comment = require("../api/service_comment");
  var service_adviser = require("../api/service_adviser");
  var vinput = require("../components/input/input");
  var encode = require("../components/input/encode");
  var quillConfig1 = require("../components/input/config/eipt_config1");
  var quillConfig2 = require("../components/input/config/eipt_config2");
  var quillConfig3 = require("../components/input/config/eipt_config3");
  module.exports = {template: '\n
