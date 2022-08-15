const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/Clone_VNexpress";

async function connect(){
    try{
        await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connecting Successfully!!!');
    } catch(err){
        console.log('Connecting Failure! Error: ' + err);
    }
}

module.exports = { connect };
