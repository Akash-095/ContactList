const mongoose = require('mongoose');
const mongoURI = "***";


const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo")
};




module.exports = connectToMongo;
