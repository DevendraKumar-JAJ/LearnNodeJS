const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end("Hello Dev : ")
  }else if(req.url==='/about'){
    res.end("I am a developer ");
  }
  else{
    res.end('404 : Not found')
  }
})


server.listen(4000,()=>{
  console.log("4000")
})