const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/PayTm')
const userschema=new mongoose.schema({
  username:{type:String,required:true,unique:true,trim:true,lowercase:true,minlength:3,maxlength:30},
  firstName:{type:String,required:true,trim:true,maxlength:60},
  lastName:{type:String,required:true,trim:true,maxlength:60},
  password:{type:String,required:true,minlength:6},
});
const user=mongoose.model('user',userschema);
module.exports={user}; 