

const express= require('express') 
const app=express()


app.get('/',(req,res)=>{
  res.send('Hello! I am Devendra.')
})


app.get('/about',(req,res)=>{
  res.send('<h1>About Me</h1>')
})

app.post('/user',(req,res)=>{
  console.log(req.params)
  res.send('Working on it.')
})

app.listen(4000,()=>{
  console.log("4000")
})