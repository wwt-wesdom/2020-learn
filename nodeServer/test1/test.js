process.on('message',(data)=>{
  console.log('子进程接受消息：',data)
})

process.send('我是子进程')
