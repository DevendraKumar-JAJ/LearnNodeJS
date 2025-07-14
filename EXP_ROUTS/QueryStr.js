const express=require('express')
const app =express()
app.listen(4000)

app.get('/:search',(req,res)=>{
  res.send(req.params.search)
})

app.get('/:search/:id',(req,res)=>{
  res.send(req.params.search+" "+req.params.id)
})


// Query with q 
app.get('/fruit',(req,res)=>{
  if(req.query.q){
    const li= `<li>${req.query.q}</li>`
    res.send(`<ul>${li}</ul`);
  }
  else{
    res.send("Query must  [ /get?q=  ]")
  }
})

// Query with any key



app.get("/fruits",(req, res) => {
  let arr=''
  for (const key in req.query) {
    if(req.query[key]){
    arr += `<li>${req.query[key]}</li> `;
    }
}
  res.send(`<h1>Fruits are : </h1><ul type="circle">${arr}</ul>`);
});