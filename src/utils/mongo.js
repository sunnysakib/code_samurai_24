const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://xcoder:jOMvOSR8sZa3dvbv@cluster0.o7a1tca.mongodb.net/?retryWrites=true&w=majority"

async function mongoConnect(){
    mongoose.connect(MONGO_URL).then(
        ()=>{
            console.log("MongoDB Connect Successfully");
        },
        (err) =>{
            console.error(err);
        }
    )
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}