const express = require("express");
const app = express();
function typewritter(req){
  let pram = req.params.id
  console.log(pram.length)
  return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vite + React</title>
    <style>
      * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #808080;
  color: aliceblue;
  scrollbar-width: thin;
  #root {
    max-width: 100%;
    /* height: 100%; */
  }
}


.typewritter{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: black;
  padding: 5px 10px;
}

.typewritter p{
  font-family: monospace;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid;
  padding-right:10px;
  animation: typing  ${pram.length*100+10}ms  steps(${pram.length+2})  forwards infinite,blink 1s step-end infinite;
  font-family: 900;
  font-family: 'Courier New', Courier, monospace;
  padding-left: 1px;
  animation-direction: alternate;
}

@keyframes typing {
  from{
    width: 0;
  }
  to{
    width: 100%;
  }
}

@keyframes blink {
  50%{
    border-color: transparent;
  }
  
}
    </style>
  </head>
  <body>
    <div class="typewritter">
      <div>
        <p>${req.params.id}</p>
      </div>
    </div>
  </body>
</html>

    `;
}

app.get("/:id", (req, res) => {
  res.send(typewritter(req));
});



app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

