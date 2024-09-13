const express = require('express');
const app = express();
const user = require('./routes/user.js');



// middleware
app.use(user);



app.listen(3000 , (err) => {
  if(err) {
    console.log(err)
  }
  else{
    console.log("server ha started on port 3000");
  }
})