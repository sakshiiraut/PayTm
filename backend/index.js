const express = require('express'); 
const mainRouter=require("./routes/index");
const app=express();
app.use("/api/v1",mainRouter);
module.exports=app;
module.express=Router;



