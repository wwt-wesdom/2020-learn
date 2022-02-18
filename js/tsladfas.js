function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true})
  } else {
    obj[key] = value
  }
  return obj
}

define(function (require, exports, module) {
  "use strict";
  var service_config = require("service_config");
  var service_group = require("../api/service_group");
  var service_adviser = require("../api/service_adviser");
  var moment = require("moment");
  var echarts = require("echarts");
  var port = require("../investmentadviser/port");
  var broad = require("../investmentadviser/broad");
  var vedio = require("../investmentadviser/vedio");
  var comment = require("../investmentadviser/comment");
  var answer = require("../investmentadviser/answer");
  module.exports = {
    template: '',
    components: {port: port, broad: broad, vedio: vedio, comment: comment, answer: answer},
    data: function data() {
      var _editFormRules, _ref;
      var checkTel = function checkTel(rule, value, callback) {
        if (!value) {
          return callback()
        }
        setTimeout(function () {
          var re = /^1[3|5|6|7|8|9]\d{9}$/;
          if (!re.test(value)) {
            callback(new Error("请输入正确格式的手机号码"))
          } else {
            callback()
          }
        }, 100)
      };
      return _ref = {
        tgUserId: "",
        relativeHeadImgUrl: seajs.root + "/src/assets/default_icon.png",
        filters: {
          status: this.$route.query.statusType || "1",
          name: "",
          rangedate: "",
          sex: "",
          education: "",
          businessDepartment: "",
          adviserLevel: "",
          experienceYearQuery: "1",
          experienceYear: "",
          characteristic: "",
          portfolioAverageIncomeQuery: "1",
          portfolioAverageIncome: "",
          investmentWinRateQuery: "1",
          investmentWinRate: "",
          trumpAdviser: "",
          orderByTag: ""
        },
        infoForm: {},
        tclist: [],
        tclistLoading: false,
        cclist: [],
        cclistLoading: false,
        flowList: [],
        flowlistLoading: false,
        avatarVisible: false,
        img: "",
        recordType: "0",
        total: 0,
        page: 1,
        pageAssess: 1,
        pageSizes: service_config.pageSizes,
        pageSize: service_config.pageSizes[0],
        totalFlow: 0,
        pageFlow: 1,
        pageSizesFlow: service_config.pageSizes,
        pageSizeFlow: service_config.pageSizes[0],
        totalAssess: 0
      }, _defineProperty(_ref, "pageAssess", 1), _defineProperty(_ref, "pageSizesAssess", service_config.pageSizes), _defineProperty(_ref, "pageSizeAssess", service_config.pageSizes[0]), _defineProperty(_ref, "groupList", []), _defineProperty(_ref, "type", "1"), _defineProperty(_ref, "uploadpath", "/tzt-managesystem/main/uploadFile?TGGL=TG"), _defineProperty(_ref, "adviserLevelOptions", service_config.adviserLevelOptions || []), _defineProperty(_ref, "sexs", [{
        value: "1",
        label: "男"
      }, {value: "2", label: "女"}]), _defineProperty(_ref, "adviserSimpleOptions", [{id: "7", name: "投资顾问助理"}, {
        id: "8",
        name: "投资顾问"
      }, {id: "9", name: "理财顾问"}, {id: "10", name: "高级理财顾问"}, {id: "11", name: "资深理财顾问"}, {
        id: "12",
        name: "高级投资顾问"
      }, {id: "13", name: "资深投资顾问"}, {id: "14", name: "金牌投资顾问"}, {id: "15", name: "首席投资顾问"}, {
        id: "16",
        name: "副总经理"
      }, {id: "17", name: "服务"}, {id: "23", name: "营业部投顾助理"}, {id: "38", name: "经纪人[A]"}, {
        id: "49",
        name: "理财顾问助理"
      }, {id: "50", name: "金牌理财顾问"}, {id: "51", name: "独立经纪人[B]"}]), _defineProperty(_ref, "charas", [{
        id: "1",
        name: "绩优股"
      }, {id: "2", name: "成长股"}, {id: "3", name: "短线"}, {id: "4", name: "中长线"}, {id: "5", name: "宏观面"}, {
        id: "6",
        name: "基本面"
      }, {id: "7", name: "技术面"}, {id: "8", name: "政策面"}, {id: "9", name: "价值投资"}, {id: "10", name: "趋势投资"}, {
        id: "14",
        name: "主题投资"
      }, {id: "11", name: "量化投资"}, {id: "12", name: "热点轮换"}, {
        id: "13",
        name: "仓位控制"
      }]), _defineProperty(_ref, "educations", [{id: "2", name: "高中"}, {id: "3", name: "大专"}, {
        id: "4",
        name: "本科"
      }, {id: "5", name: "硕士"}, {id: "6", name: "博士"}]), _defineProperty(_ref, "punishments", [{
        id: "0",
        name: "封号"
      }, {id: "1", name: "禁言"}]), _defineProperty(_ref, "reasons", [{id: "1", name: "言论违规"}, {
        id: "2",
        name: "产品违规"
      }, {
        id: "3",
        name: "其他"
      }]), _defineProperty(_ref, "editFormVisible", false), _defineProperty(_ref, "editLoading", false), _defineProperty(_ref, "editFormRules", (_editFormRules = {
        adviserLevel: [{
          required: true,
          message: "请选择投顾等级",
          trigger: "blur"
        }],
        loginUsername: [{required: true, message: "s", trigger: "blur"}, {
          min: 4,
          max: 20,
          message: "请输入4到20个字符的投顾账号",
          trigger: "blur"
        }],
        password: [{required: false, trigger: "blur"}, {
          min: 6,
          max: 20,
          message: "请输入6到20个字符的投顾登录密码",
          trigger: "blur"
        }],
        name: [{required: true, message: "请输入投顾名称", trigger: "blur"}, {
          min: 2,
          max: 8,
          message: "请输入2到8个字符的投顾名称",
          trigger: "blur"
        }],
        mobile: [{required: false, validator: checkTel, trigger: "blur"}]
      }, _defineProperty(_editFormRules, "adviserLevel", [{
        required: true,
        message: "请输入投顾级别",
        trigger: "blur"
      }]), _defineProperty(_editFormRules, "practiseCode", [{
        required: false,
        message: "请输入执业编号",
        trigger: "blur"
      }, {
        min: 14,
        max: 14,
        message: "请输入14个字符的执业编号",
        trigger: "blur"
      }]), _defineProperty(_editFormRules, "signature", [{required: false, trigger: "blur"}, {
        min: 4,
        max: 16,
        message: "请输入4到16个字符的投顾说明",
        trigger: "blur"
      }]), _defineProperty(_editFormRules, "description", [{required: false, trigger: "blur"}, {
        min: 10,
        max: 160,
        message: "请输入10到160个字符的投顾介绍",
        trigger: "blur"
      }]), _editFormRules)), _defineProperty(_ref, "options", [{id: "0", name: "资料有误"}, {
        id: "1",
        name: "资料虚假"
      }, {id: "2", name: "资料违规"}, {id: "3", name: "其它"}]), _defineProperty(_ref, "editForm", {
        userId: "",
        loginUsername: "",
        name: "",
        mobile: "",
        practiseCode: "",
        signature: "",
        adviserLevel: "",
        characteristic: "",
        description: "",
        createTime: "",
        experienceYear: "",
        trumpAdviser: "0"
      }), _defineProperty(_ref, "punishFormVisible", false), _defineProperty(_ref, "punishFormRules", {
        punishType: [{
          required: true,
          message: "请选择处罚类型"
        }],
        punishPeriodType: [{required: true, message: "请选择处罚周期"}],
        punishReason: [{required: true, message: "请选择处罚原因"}]
      }), _defineProperty(_ref, "punishForm", {
        userId: "",
        loginUsername: "",
        name: "",
        mobilecode: "",
        punishType: "",
        punishPeriodType: "",
        punishReason: ""
      }), _defineProperty(_ref, "punishLoading", false), _defineProperty(_ref, "reviewFormVisible", false), _defineProperty(_ref, "reviewLoading", false), _defineProperty(_ref, "reviewFormRules", {
        statusContent: [{
          required: true,
          message: "请选择驳回原因"
        }]
      }), _defineProperty(_ref, "reviewForm", {status: "1", statusContent: ""}), _ref
    },
    methods: {
      showImgTzt: function showImgTzt(img) {
        var retimg = "";
        if (img) {
          retimg = "/tzt-managesystem" + img
        } else {
          retimg = this.relativeHeadImgUrl
        }
        return retimg
      }, showTime: function showTime(time) {
        return time ? moment(time).format("YYYY-MM-DD") : ""
      }, showStatus: function showStatus(row) {
        var text = "";
        if (row.status == 0) {
          text = "待审核"
        } else if (row.status == 1) {
          text = "审核通过"
        } else if (row.status == -1) {
          text = "待编辑"
        } else if (row.status == 2) {
          text = "审核驳回"
        }
        return text
      }, showClass: function showClass(row) {
        var color = "";
        if (row.status == 0) {
          color = "colorf00"
        } else if (row.status == 1) {
          color = "color0f0"
        } else if (row.status == 2) {
          color = "colorf90"
        } else if (row.status == -1) {
          color = "colorf00"
        }
        return color
      }, showImg: function showImg(img) {
        var imgAddress = "";
        if (img) {
          if (img.indexOf("blob") != -1) {
            imgAddress = img
          } else {
            imgAddress = "/tzt-managesystem" + img
          }
        }
        return imgAddress
      }, showAdviserLevel: function showAdviserLevel(row) {
        var adviserLevelOptions = this.adviserLevelOptions;
        var text = row.type;
        for (var i = 0; i < adviserLevelOptions.length; i++) {
          var oItem = adviserLevelOptions[i];
          if (oItem.id == row.adviserLevel) {
            text = oItem.name
          }
        }
        return text
      }, showLevel: function showLevel(level) {
        var levelstr = "";
        this.adviserSimpleOptions.map(function (item) {
          if (item.id == level) {
            levelstr = item.name
          }
        });
        return levelstr
      }, showChara: function showChara(chara) {
        var charastr = [];
        if (chara) {
          charastr = chara
        }
        return charastr.length > 0 ? charastr.join(",") : ""
      }, showEdu: function showEdu(row) {
        var edu = "";
        this.educations.map(function (item) {
          if (item.id == row.education) {
            edu = item.name
          }
        });
        return edu
      }, showDate: function showDate(row) {
        return row.latestDate ? moment(row.latestDate).format("YYYY-MM") : ""
      }, showType: function showType(row) {
        var type = "";
        this.punishments.map(function (item) {
          if (item.id == row.punishType) {
            type = item.name
          }
        });
        return type
      }, showPeriod: function showPeriod(row) {
        var period = "";
        if (row.punishPeriod == -1) {
          period = "长期"
        } else {
          period = row.punishPeriod
        }
        return period
      }, showReason: function showReason(row) {
        var reason = "";
        this.reasons.map(function (item) {
          if (item.id == row.punishReason) {
            reason = item.name
          }
        });
        return reason
      }, handleSuccessHeadEdit: function handleSuccessHeadEdit(res, file) {
        var that = this;
        if (res.code >= 0) {
          var data = JSON.parse(res.data);
          this.editForm.relativeHeadImgUrl = data[0][0];
          this.$forceUpdate()
        } else {
          that.$message({showClose: true, message: res.errMsg, type: "error"})
        }
      }, handleSuccessImageEdit: function handleSuccessImageEdit(res, file) {
        var that = this;
        if (res.code >= 0) {
          var data = JSON.parse(res.data);
          this.editForm.adviserPicture = data[0][0];
          this.$forceUpdate()
        } else {
          that.$message({showClose: true, message: res.errMsg, type: "error"})
        }
      }, handleEditPreview: function handleEditPreview(file) {
        var fileType = file.name.substring(file.name.lastIndexOf(".") + 1);
        var extension = fileType === "jpg";
        var extension2 = fileType === "png";
        var isJpg = true;
        if (!extension && !extension2) {
          isJpg = false;
          this.$message.error("上传头像图片只能是 JPGPNG 格式!")
        }
        return isJpg
      }, handleSizeChangeFlow: function handleSizeChangeFlow(val) {
        this.pageSizeFlow = val;
        this.showTable()
      }, handleCurrentChangeFlow: function handleCurrentChangeFlow(val) {
        this.pageFlow = val;
        this.showTable()
      }, handleSizeChange: function handleSizeChange(val) {
        this.pageSize = val;
        this.showTable()
      }, handleCurrentChange: function handleCurrentChange(val) {
        this.page = val;
        this.showTable()
      }, changeRecordType: function changeRecordType(val) {
        this.page = 1;
        this.pageFlow = 1;
        this.showTable()
      }, handleSizeChangeAssess: function handleSizeChangeAssess(val) {
        this.pageSizeAssess = val;
        this.showTable()
      }, handleCurrentChangeAssess: function handleCurrentChangeAssess(val) {
        this.pageAssess = val;
        this.showTable()
      }, showTable: function showTable() {
        var that = this;
        if (that.recordType == 0) {
          var para = {userId: that.$route.query.userId, pageNum: that.page, pageSize: that.pageSize};
          that.tclistLoading = true;
          service_adviser.getAdviserProductData(para).then(function (res) {
            that.total = res.data.totalCount;
            that.tclist = res.data.result;
            that.tclistLoading = false
          })
        } else if (that.recordType == 1) {
          var _para = {userId: that.$route.query.userId, pageNum: that.pageAssess, pageSize: that.pageSizeAssess};
          that.cclistLoading = true;
          service_adviser.getAssessmentMonth(_para).then(function (res) {
            that.cclist = res.data.result;
            that.cclistLoading = false;
            that.totalAssess = res.data.totalCount
          })
        } else if (that.recordType == 2) {
          var _para2 = {
            userId: that.$route.query.userId,
            pageNum: that.pageFlow,
            pageSize: that.pageSizeFlow,
            userType: "1"
          };
          that.flowlistLoading = true;
          service_group.getPunishmentPage(_para2).then(function (res) {
            that.totalFlow = res.data.totalCount;
            that.flowList = res.data.result;
            that.flowlistLoading = false
          })
        }
      }, handleDetail: function handleDetail() {
        var _this = this;
        var that = this;
        var para = {userId: that.$route.query.userId, MODEL: "TGXQ"};
        that.detailLoading = true;
        service_adviser.getAdviserView(para).then(function (res) {
          if (res.code >= 0 && res.data) {
            var infoForm = res.data;
            var arr = [0, 2];
            if (arr.indexOf(res.data.status) > -1) {
              that.infoForm = {
                relativeHeadImgUrl: infoForm.relativeHeadImgUrlEdit,
                adviserName: infoForm.adviserNameEdit,
                loginUsername: infoForm.loginUsername,
                adviserLevel: infoForm.adviserLevel,
                characteristic: infoForm.characteristicEdit,
                signature: infoForm.signatureEdit,
                description: infoForm.descriptionEdit,
                sex: infoForm.sexEdit,
                practiseCode: infoForm.practiseCodeEdit,
                practiseCreateTime: infoForm.practiseCreateTimeEdit,
                mobile: infoForm.mobileEdit,
                experienceYear: infoForm.experienceYear,
                businessDepartment: infoForm.businessDepartmentEdit,
                trumpAdviser: infoForm.trumpAdviser,
                characteristiccopy: infoForm.characteristicEdit,
                education: infoForm.educationEdit,
                attention: infoForm.attention,
                userId: infoForm.userId,
                adviserPicture: infoForm.adviserPictureEdit
              };
              if (infoForm.practiseCreateTimeEdit) {
                var startTime = moment(infoForm.practiseCreateTimeEdit).format("YYYY-MM-DD");
                var endTime = moment(new Date).format("YYYY-MM-DD");
                that.infoForm.experienceYear = moment(endTime).diff(moment(startTime), "years") + "年"
              }
            } else {
              that.infoForm = {
                relativeHeadImgUrl: infoForm.relativeHeadImgUrl,
                adviserName: infoForm.adviserName,
                loginUsername: infoForm.loginUsername,
                adviserLevel: infoForm.adviserLevel,
                characteristic: infoForm.characteristic,
                signature: infoForm.signature,
                description: infoForm.description,
                sex: infoForm.sex,
                practiseCode: infoForm.practiseCode,
                practiseCreateTime: infoForm.practiseCreateTime,
                mobile: infoForm.mobile,
                experienceYear: infoForm.experienceYear,
                businessDepartment: infoForm.businessDepartment,
                trumpAdviser: infoForm.trumpAdviser,
                characteristiccopy: infoForm.characteristic,
                education: infoForm.education,
                attention: infoForm.attention,
                userId: infoForm.userId,
                adviserPicture: infoForm.adviserPicture
              };
              if (infoForm.practiseCreateTime) {
                var _startTime = moment(infoForm.practiseCreateTime).format("YYYY-MM-DD");
                var _endTime = moment(new Date).format("YYYY-MM-DD");
                that.infoForm.experienceYear = moment(_endTime).diff(moment(_startTime), "years") + "年"
              }
            }
            that.infoForm.status = res.data.status;
            if (that.infoForm.characteristic) {
              var chara = that.infoForm.characteristic.split("|");
              var charaAray = [];
              if (chara && chara.length > 0) {
                chara.map(function (item) {
                  _this.charas.map(function (items) {
                    if (item == items.id) {
                      charaAray.push(items.name)
                    }
                  })
                })
              }
              that.infoForm.characteristic = charaAray
            }
          }
        })
      }, getData: function getData() {
        var _this2 = this;
        var para = {userId: this.$route.query.userId, pageNum: this.page, pageSize: this.pageSize};
        service_adviser.getAdviserProductData(para).then(function (res) {
          if (res.code >= 0) {
            _this2.tclist = res.data.result;
            _this2.total = res.data.totalCount
          }
        })
      }, handleSex: function handleSex(sexType) {
        var text = "";
        switch (Number(sexType)) {
          case 0:
            text = "保密";
            break;
          case 1:
            text = "1";
            break;
          case 2:
            text = "2";
            break
        }
        return text
      }, handleEdit: function handleEdit(row) {
        var that = this;
        that.editFormVisible = true;
        var characteristic = row.characteristiccopy;
        var editForm = {
          userId: row.userId,
          loginUsername: row.loginUsername,
          name: row.adviserName,
          mobile: row.mobile,
          practiseCode: row.practiseCode,
          signature: row.signatureEdit || row.signature,
          adviserLevel: row.adviserLevelEdit || row.adviserLevel,
          description: row.descriptionEdit || row.description,
          createTime: row.createTime,
          experienceYear: row.experienceYear,
          trumpAdviser: row.trumpAdviser,
          sex: this.handleSex(row.sex),
          education: row.education,
          businessDepartment: row.businessDepartment,
          practiseCreateTime: row.practiseCreateTime,
          status: row.status,
          characteristic: [],
          relativeHeadImgUrl: row.relativeHeadImgUrl,
          adviserPicture: row.adviserPicture
        };
        if (characteristic.trim() !== "" && characteristic) {
          editForm.characteristic = characteristic.split("|")
        } else {
          editForm.characteristic = []
        }
        if (editForm.practiseCreateTime) {
          var startTime = moment(editForm.practiseCreateTime).format("YYYY-MM-DD");
          var endTime = moment(new Date).format("YYYY-MM-DD");
          editForm.experienceYear = moment(endTime).diff(moment(startTime), "years") + "年"
        }
        that.editForm = editForm
      }, handlePunish: function handlePunish(row) {
        var that = this;
        that.punishFormVisible = true;
        that.punishForm = {
          userId: row.userId,
          loginUsername: row.loginUsername,
          name: row.adviserName,
          mobile: row.mobile,
          punishType: "",
          punishPeriodType: "",
          punishReason: ""
        }
      }, clearPunish: function clearPunish(done) {
        this.punishLoading = false;
        this.punishFormVisible = false;
        this.$refs["punishForm"].resetFields();
        if (done && typeof done == "function") {
          done()
        }
      }, clearEdit: function clearEdit(done) {
        this.editLoading = false;
        this.editFormVisible = false;
        this.$refs["editForm"].resetFields();
        if (done && typeof done == "function") {
          done()
        }
      }, punishSubmit: function punishSubmit() {
        var _this3 = this;
        this.$refs.punishForm.validate(function (valid) {
          if (valid) {
            _this3.punishLoading = true;
            var punishForm = Object.assign({}, _this3.punishForm);
            var para = {
              userType: "1",
              userId: punishForm.userId,
              punishType: punishForm.punishType,
              punishPeriodType: punishForm.punishPeriodType,
              punishReason: punishForm.punishReason,
              MODEL: "TGXQ"
            };
            service_group.insertPunish(para).then(function (res) {
              var that = _this3;
              that.punishLoading = false;
              if (res.code >= 0) {
                that.punishFormVisible = false;
                that.$message({showClose: true, message: res.errMsg, type: res.code >= 0 ? "success" : "error"});
                that.$refs["punishForm"].resetFields()
              }
            })
          }
        })
      }, editSubmit: function editSubmit() {
        var _this4 = this;
        this.$refs.editForm.validate(function (valid) {
          if (valid) {
            _this4.editLoading = true;
            var editForm = Object.assign({}, _this4.editForm);
            var para = {};
            var arr = [0, 2];
            if (arr.indexOf(_this4.infoForm.status) > -1) {
              para = {
                adviserNameEdit: editForm.name,
                loginUsername: editForm.loginUsername,
                sexEdit: editForm.sex,
                adviserLevelEdit: editForm.adviserLevel,
                attention: editForm.attention,
                praiseCount: editForm.praiseCount,
                shareCount: editForm.shareCount,
                discussCount: editForm.discussCount,
                educationEdit: editForm.education,
                mobileEdit: editForm.mobile,
                businessDepartmentEdit: editForm.businessDepartment,
                practiseCodeEdit: editForm.practiseCode,
                practiseCreateTimeEdit: moment(editForm.practiseCreateTime).format("YYYY-MM-DD"),
                characteristicEdit: editForm.characteristic,
                signatureEdit: editForm.signature,
                descriptionEdit: editForm.description,
                relativeHeadImgUrlEdit: editForm.relativeHeadImgUrl,
                adviserPictureEdit: editForm.adviserPicture,
                trumpAdviser: editForm.trumpAdviser,
                status: _this4.infoForm.status
              }
            } else {
              para = Object.assign({}, editForm);
              para.status = _this4.infoForm.status;
              if (para.characteristic && para.characteristic.length > 0) {
                para.characteristic = para.characteristic.join("|")
              } else {
                para.characteristic = ""
              }
            }
            para.userId = _this4.$route.query.userId;
            if (para.characteristicEdit && para.characteristicEdit.length > 0) {
              para.characteristicEdit = para.characteristicEdit.join("|")
            } else {
              para.characteristicEdit = ""
            }
            if (para.sexEdit == "保密") {
              para.sexEdit = "0"
            }
            if (para.sex == "保密") {
              para.sex = "0"
            }
            para.TGGL = "TGXQ";
            service_adviser.updateAdviser(para).then(function (res) {
              var that = _this4;
              that.editLoading = false;
              if (res.code >= 0) {
                that.editFormVisible = false;
                that.$message({showClose: true, message: res.errMsg, type: res.code >= 0 ? "success" : "error"});
                that.$refs["editForm"].resetFields();
                that.handleDetail()
              }
            })
          }
        })
      }, clearReview: function clearReview(done) {
        this.reviewLoading = false;
        this.reviewFormVisible = false;
        this.$refs["reviewForm"].resetFields();
        if (done && typeof done == "function") {
          done()
        }
      }, uploadChange: function uploadChange(file) {
        var isLt1M = file.size / 1024 / 1024 < .5;
        if (!isLt1M) {
          this.$message.error("上传头像图片大小不能超过 0.5 MB!");
          return
        }
        this.img = file.url;
        this.$nextTick(function () {
          if ($("#image").data("cropper")) {
            $("#image").data("cropper").replace(file.url)
          } else {
            $("#image").cropper({aspectRatio: 31 / 50, preview: "#preview"})
          }
        })
      }, handlePeriod: function handlePeriod(val, item) {
        var _this5 = this;
        var num = 0;
        var that = this;
        num = val == 1 ? 7 : val == 2 ? 30 : val == 3 ? 90 : 0;
        if (num && num != 0) {
          var nowTime = moment((new Date).setTime((new Date).getTime() - 3600 * 1e3 * 24 * 7)).format("YYYY-MM-DD HH:mm:ss");
          if (item.punishStartTime < nowTime) {
            this.$confirm("修改后的处罚结束时间已早于当前时间，是否确认结束处罚？", "提示", {}).then(function () {
              var para = {id: item.id, TGGL: "TGXQ"};
              service_group.removePunish(para).then(function (res) {
                if (res.code >= 0) {
                  that.$message({showClose: true, message: res.errMsg, type: res.code >= 0 ? "success" : "error"});
                  _this5.getPortfolios()
                }
              })
            }).catch(function () {
            })
          }
        }
      }, handleReview: function handleReview(row) {
        var that = this;
        that.reviewFormVisible = true;
        var oForm = Object.assign({}, row);
        oForm.status = "1";
        oForm.statusContent = "";
        oForm.sex = oForm.sex == 1 ? "男" : oForm.sex == 2 ? "女" : "保密";
        if (oForm.practiseCreateTime) {
          var startTime = moment(oForm.practiseCreateTime).format("YYYY-MM-DD");
          var endTime = moment(new Date).format("YYYY-MM-DD");
          oForm.experienceYear = moment(endTime).diff(moment(startTime), "years") + "年"
        }
        this.reviewForm = Object.assign({}, oForm);
        if (this.$route.query.status == -1) {
          this.$set(this.reviewForm, "status", "0")
        }
      }, reviewSubmit: function reviewSubmit() {
        var _this6 = this;
        this.$refs.reviewForm.validate(function (valid) {
          if (valid) {
            _this6.reviewLoading = true;
            var reviewForm = _this6.reviewForm;
            var para = {loginUsername: reviewForm.loginUsername, status: reviewForm.status, MODEL: "TGXQ"};
            if (reviewForm.status == "2") {
              para.statusContent = reviewForm.statusContent
            }
            service_adviser.approveAdviser(para).then(function (res) {
              var that = _this6;
              that.reviewLoading = false;
              if (res.code >= 0) {
                that.reviewFormVisible = false;
                that.$message({showClose: true, message: res.errMsg, type: res.code >= 0 ? "success" : "error"});
                that.$refs["reviewForm"].resetFields();
                that.getAdvisers()
              }
            })
          }
        })
      }, changePractiseCreateTime: function changePractiseCreateTime() {
        var experienceYear = void 0;
        if (this.editForm.practiseCreateTime) {
          var startTime = moment(this.editForm.practiseCreateTime).format("YYYY-MM-DD");
          var endTime = moment(new Date).format("YYYY-MM-DD");
          experienceYear = moment(endTime).diff(moment(startTime), "years") + "年"
        } else {
          experienceYear = ""
        }
        this.$set(this.editForm, "experienceYear", experienceYear);
        this.$forceUpdate()
      }, findAdviserCharacteristic: function findAdviserCharacteristic() {
        var _this7 = this;
        var para = {};
        service_adviser.findAdviserCharacteristic(para).then(function (res) {
          if (res.code > 0) {
            var arr = [];
            res.data.result.forEach(function (item) {
              arr.push({id: item.index + "", name: item.value + ""})
            });
            _this7.charas = arr
          }
        })
      }, upload: function upload() {
        this.avatarVisible = true;
        this.img = this.editForm.adviserPicture ? "/tzt-managesystem" + this.editForm.adviserPicture : ""
      }, left: function left() {
        $("#image").data("cropper").rotate(-90)
      }, right: function right() {
        $("#image").data("cropper").rotate(90)
      }, smaller: function smaller() {
        $("#image").data("cropper").zoom(-.1)
      }, bigger: function bigger() {
        $("#image").data("cropper").zoom(.1)
      }, reset: function reset() {
        $("#image").data("cropper").reset()
      }, save: function save() {
        var that = this;
        $("#image").data("cropper").getCroppedCanvas().toBlob(function (blob) {
          var formData = new FormData;
          var newImg = (new Date).getTime() + ".png";
          formData.append("idPic", blob, newImg);
          service_group.updateAvatar(formData).then(function (res) {
            if (res.code >= 0) {
              that.$message({showClose: true, message: "上传成功", type: "success"})
            }
            if (res.code >= 0) {
              that.avatarVisible = false;
              if (res.data && res.data.length > 0) {
                var resultAray = JSON.parse(res.data)[0][0];
                that.addForm.adviserPicture = resultAray
              }
            }
          })
        })
      }
    },
    mounted: function mounted() {
      var _this8 = this;
      var that = this;
      var user = JSON.parse(sessionStorage.getItem("user"));
      that.tgUserId = user.userId;
      that.tgRelativeHeadImgUrl = user.relativeHeadImgUrl || this.relativeHeadImgUrl;
      that.$nextTick(function () {
        that.handleDetail();
        _this8.getData();
        _this8.findAdviserCharacteristic()
      })
    }
  }
});
