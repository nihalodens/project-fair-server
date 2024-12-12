const mongoose = require('mongoose')

const connection_string = process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGODB ATLAS CONNECTED SUCCESFULLY WITH PFSERVER"); 
}).catch(err=>{
    console.log("MONGODB ATLAS Connection failed");
    console.log(err);
})