

const express= require('express') 
const app=express()


app.get('/',(req,res)=>{
  res.send('Hello! I am Devendra.')
})


app.post('/about',(req,res)=>{
  res.send('<h1>About Me</h1>')
})


app.listen(4000,()=>{
  console.log("4000")
})