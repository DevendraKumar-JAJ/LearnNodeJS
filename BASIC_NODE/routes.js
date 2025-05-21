const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('Home');

  }
  else if (req.url==='/about'){
    // res.end('<h1>About</h1>')
    res.setHeader("Content-Type", "text/html");
   res.end('<marquee behavior="scroll" direction="left"><h1></h1></marquee>');
  }
  
  else if(req.url=='/contact'){
    res.setHeader("Content-Type", "text/html");
    res.end('<h1>Cotact </h1><h2>Agin</h2>')
  }
})

server.listen(4000,()=>{
  console.log(4000)
});

// let array=process.argv
// array.forEach(ele => {
//   console.log(`Hello ${ele}`)
// });


// mmon values:

// 1. scroll: The content scrolls continuously in the specified direction.
// 2. slide: The content slides into view and stops when it reaches the edge.
// 3. alternate: The content scrolls back and forth between the edges.

