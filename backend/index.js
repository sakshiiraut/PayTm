const express = require('express'); 
const mainRouter=require("./routes/index");
const cors=require("cors");
app.use(cors());
app.use(express.json());  
const app=express();
app.use("/api/v1",mainRouter);
module.exports=app;
module.express=Router;
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});







