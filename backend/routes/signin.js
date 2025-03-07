const express=require('express');
const app=express();
app.use(express.json());  
app.get('/',(req,res)=>{
  username=req.headers.username;
  password=req.headers.password;
})
app.listen(3000);