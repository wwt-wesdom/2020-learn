console.log('child process');
console.log('child pid', process.pid);

process.on('message', (m) => {
  console.log(m);
})

process.send('hello main process')