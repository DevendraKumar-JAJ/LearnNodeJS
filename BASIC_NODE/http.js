const http=require('http');
const server=http.createServer((req,res)=>{
  res.end('Hello User ');
});

server.listen(4000,()=>{
  console.log("Listing on 4000 ");
})

