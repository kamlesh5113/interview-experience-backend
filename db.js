const mongoose = require('mongoose');


const ur = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6v51z.mongodb.net/${process.env.DB_NAME}`;

const connect = async()=>{
    try{
        await mongoose.connect(ur, {useUnifiedTopology:true, useNewUrlParser:true} );
        console.log("Connected to Database");
    }catch(err){
        console.log("Not Connected to Database")
    }
};

module.exports = connect;