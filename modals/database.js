const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/OAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err,db)=>{
    if(err) throw err;
    console.log("connected to mongodb")
});

