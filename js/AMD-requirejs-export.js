define(function (require, exports, module) {
  module.exports = {
    methods: {
      getTotalNum(n) {
        console.log(n);
      },
      boFei(n) {
        if (n === 1 || n === 2) return 1;
        return this.boFei(n-1) + this.boFei(n-2);
      }
    }
  }
});
