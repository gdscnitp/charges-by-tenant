
const mongoose = require("mongoose");
mongoose.set("useCreateIndex",true);
connectMongodb();


mongoose.connection.on("error",function(err){
  console.trace("Mongodb connection Failed",err);
  
});
mongoose.connection.on("connected",function(success){
  console.log("successsfully opened mongodb connection");
})
function connectMongodb(){
  mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify :false,
  })
}
