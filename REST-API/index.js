const express=require('express');
const app=express();
const path=require('path')
const {v4:uuidv4}=require('uuid') 
const _methodOverrride=require('method-override')
// Seting view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.set(express.static(path.join(__dirname,'public')))
app.use(_methodOverrride('_method'))
// Encoding reqs
app.use(express.urlencoded({extended :true}))

// data array

let posts = [
  {
    id: uuidv4(),
    username: "Dev",
    content: "I am a Developer",
  },
  {
    id: uuidv4(),
    username: "Sudhanshu",
    content: "I am a Web Developer",
  },
  {
    id: uuidv4(),
    username: "Rahul",
    content: "I am an Electrician",
  },
  {
    id: uuidv4(),
    username: "Ratan",
    content: "I am an ECE student ",
  },
  {
    id: uuidv4(),
    username: "Ankita",
    content: "I am a student of 2nd standard",
  },
];

// Listening on port 8000
app.listen(8000,()=>{
  console.log("http://localhost:8000/");
})

app.get('/',(req,res)=>{
  const time=new Date()
  console.log('Server Checked at :|'+time.getHours()+":"+time.getMinutes()+':'+ time.getSeconds())
  res.send('Server  working properly')
})

// to get all user and their posts
app.get('/posts',(req,res)=>{
  if(posts.length>1){
  res.render("index.ejs", { posts });
  }
  else{
  res.render("form.ejs");
  }
})

app.get('/posts/new',(req,res)=>{
  res.render('form.ejs')
})

app.post('/posts',(req,res)=>{  
  if(req.body){
    posts.push({
      id:uuidv4(),
      username:req.body.username,
      content: req.body.content
    })
    res.redirect('/posts') // only one at a time 
    // res.send(
    //   posts[posts.length - 1].username + ": " + posts[posts.length - 1].content);
  }
  else{
    res.send('User name and content need')
  }
})


app.get('/posts/:id',(req,res)=>{
  if(req.params.id>0 && posts.length>=req.params.id){
    res.send(posts[req.params.id - 1].username + " <br>" + posts[req.params.id - 1].content);
    res.render('index.ejs',{posts:[posts[req.params.id-1]]})
  }
  else{
    res.send('Wrong I\'d : '+req.params.id);
  }

  const post = posts.find((post) =>{
    if(post.id==req.params.id){
      return post
    }
    else{
      return false
    }
  });
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }
  else{
    res.render('index.ejs',{posts:[post]})
  }
})



app.get('/posts/:id/edit',(req,res)=>{
  console.log(req.params.id)
  res.render('editpost.ejs',{id:req.params.id})
})


app.patch('/posts/:id',(req,res)=>{
  const post = posts.find((post) => {
    if (post.id == req.params.id) {
      return post;
    } else {
      return false;
    }
  });
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  } else {
    if(req.body.content){
    post.content=req.body.content
    }
    res.render("index.ejs", { posts: [post] });
  }
})



app.delete("/posts/:id", (req, res) => {
  const post = posts.find((post) => {
    if (post.id == req.params.id) {
      return post;
    } else {
      return false;
    }
  });
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  } else {
    posts = posts.filter((post) => post.id !== req.params.id);
    res.render("index.ejs", { posts});
  }
});