define(function (require, exports, module) {
  "use strict";
  var service_config = require("service_config");
  var service_sign = require("../../../api/service_sign");
  var VueEditor = require("vue-editor");
  var uploadPic = require("api").uploadPic;
  module.exports = {
    template: '',
    components: {VueEditor: VueEditor.VueEditor},
    data: function data() {
      var checkContent = function checkContent(rule, value, callback) {
        if (!value) {
          return callback(new Error("请输入消息内容"))
        }
        setTimeout(function () {
          var reg = /<img\b.*?(?:\>|\/>)/, isImg = reg.test(value);
          var re = value.replace(/<[^>]+>/g, "");
          if (!($.trim(re) || isImg)) {
            callback(new Error("请输入消息内容"))
          } else {
            callback()
          }
        }, 100)
      };
      var checkVersion = function checkVersion(rule, value, callback) {
        if (!value) {
          return callback(new Error("请输入版本号"))
        }
        setTimeout(function () {
          var re = /^[1-9][0-9]*$/;
          if (!re.test(value)) {
            callback(new Error("版本号只能为正整数"))
          } else {
            callback()
          }
        }, 300)
      };
      return {
        filters: {name: "", signVersion: ""},
        customToolbar: service_config.customToolbar || [],
        signs: [],
        total: 0,
        page: 1,
        pageSizes: service_config.pageSizes,
        pageSize: service_config.pageSizes[0],
        listLoading: false,
        infoFormVisible: false,
        infoForm: {},
        formVisible: false,
        formLoading: false,
        formRules: {
          name: [{required: true, message: "请输入协议类型", trigger: "blur"}],
          signVersion: [{required: true, validator: checkVersion}],
          content: [{required: true, validator: checkContent}]
        },
        dataForm: {bussinessType: "", signVersion: "", content: ""},
        signNames: [],
        signVersions: [],
        isShowList: false
      }
    },
    methods: {
      handleSizeChange: function handleSizeChange(val) {
        this.pageSize = val;
        this.getSignlists()
      }, handleCurrentChange: function handleCurrentChange(val) {
        this.page = val;
        this.getSignlists()
      }, getSignlists: function getSignlists() {
        var _this = this;
        var para = {pageNum: this.page, pageSize: this.pageSize};
        for (var i in this.filters) {
          if (this.filters[i] !== "") {
            para[i] = this.filters[i]
          }
        }
        this.listLoading = true;
        service_sign.getSignlistPage(para).then(function (res) {
          _this.total = res.data.totalCount;
          _this.signs = res.data.result;
          _this.listLoading = false
        })
      }, handleInfo: function handleInfo(row) {
        var that = this;
        that.infoFormVisible = true;
        that.infoForm = Object.assign({}, row)
      }, clearInfo: function clearInfo(event) {
        if (event.target.className == "phone-bg" || event.target.className == "layer-box" || event.target.className == "el-form") {
          var that = this;
          that.infoFormVisible = false;
          that.infoForm = {}
        }
      }, handleDel: function handleDel(row) {
        var _this2 = this;
        this.$confirm("确认删除该记录吗?", "提示", {type: "warning"}).then(function () {
          _this2.listLoading = true;
          var para = {id: row.id};
          service_sign.deleteSignlist(para).then(function (res) {
            var that = _this2;
            that.listLoading = false;
            if (res.code >= 0) {
              that.$message({showClose: true, message: res.message, type: "success"});
              _this2.getSignlists();
              _this2.getSignTypes()
            }
          })
        }).catch(function () {
        })
      }, handleForm: function handleForm(row) {
        var that = this;
        that.formVisible = true;
        if (row.hasOwnProperty("id")) {
          var content = row.content;
          if (content.indexOf('class="ql-editor"') >= 0) {
            content = content.replace(/\<div class\=\"ql-editor\"\>/g, "").replace(/\<\/div\>/g, "")
          }
          that.dataForm = {
            id: row.id,
            name: row.name,
            signVersion: row.signVersion,
            content: content,
            recordRedis: Number(row.recordRedis)
          }
        } else {
          that.dataForm = {name: "", signVersion: "", content: "", recordRedis: 1}
        }
      }, handleImageAdded: function handleImageAdded(file, Editor, cursorLocation) {
        var that = this;
        var filename = file.name;
        var formData = new FormData;
        formData.append("idPic", file);
        uploadPic(formData).then(function (res) {
          if (res.code < 0) {
            that.$message({showClose: true, message: res.message, type: "error"})
          } else {
            var data = JSON.parse(res.data);
            var url = data[0][1];
            Editor.insertEmbed(cursorLocation, "image", url)
          }
        })
      }, clearForm: function clearForm(done) {
        this.formLoading = false;
        this.formVisible = false;
        this.$refs["dataForm"].resetFields();
        if (done && typeof done == "function") {
          done()
        }
      }, htmlEscape: function htmlEscape(text) {
        return text.replace(/["&′″•⁄∗]/g, function (match, pos, originalText) {
          switch (match) {
            case"&":
              return "&";
            case"′":
              return "′";
            case"″":
              return "″;";
            case'"':
              return ""
              ";case"•":return"•";case"⁄":return"⁄";case"∗":return"∗;"}})},formSubmit:function formSubmit(){var _this3=this;this.$refs.dataForm.validate(function(valid){if(valid){_this3.formLoading=true;var para=Object.assign({},_this3.dataForm);var content=para.content.replace(/﻿/g,"
              ").replace(/\t/g,"
              ");content=_this3.htmlEscape(content);para.content='<div class="
              ql - editor
              ">'+content+" < /div>";var serve=void 0;if(para.hasOwnProperty("id")){serve=service_sign.updateSignlist(para)}else{serve=service_sign.addSignlist(para)}serve.then(function(res){var that=_this3;that.formLoading=false;if(res.code>=0){that.$message({showClose:true,message:res.message,type:"success"});_this3.clearForm();_this3.getSignlists();_this3.getSignTypes()}})}})},getSignTypes:function getSignTypes(){var _this4=this;service_sign.getSignName().then(function(res){var data=res.data||[],signNames=[];for(var i=0;i<data.length;i++){var oItem=data[i];signNames.push({id:oItem.id,name:oItem.name})}_this4.signNames=signNames})},getSignVersions:function getSignVersions(val){var _this5=this;this.filters.signVersion="";if(val){var para={name:val};service_sign.getSignVersion(para).then(function(res){var data=res.data||[],signVersions=[];for(var i=0;i<data.length;i++){signVersions.push({name:data[i]})}_this5.signVersions=signVersions})}},handleIconClick:function handleIconClick(){if(this.isShowList){this.isShowList=false}else{this.isShowList=true}}},mounted:function mounted(){var _this6=this;var that=this;this.$nextTick(function(){_this6.getSignlists();_this6.getSignTypes();document.onclick=function(e){if(e.srcElement.className!="el-input__icon el-icon-caret-bottom is-clickable"){that.isShowList=false}}})}}});
