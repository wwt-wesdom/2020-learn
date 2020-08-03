process.nextTick(() => {
  console.log(111);
});
new Promise((resolve, reject) => {
  console.log(2222);
})
