var mongoose = require('mongoose')

const connectDB="mongodb+srv://alaa:12345@cluster0.1kmoqsf.mongodb.net/?retryWrites=true&w=majority"

module.exports=()=>mongoose.connect(connectDB,{ useNewUrlParser: true, useUnifiedTopology: true  },err=>{
    if(err){console.log(err);return}
    console.log("Database is connected well")
})