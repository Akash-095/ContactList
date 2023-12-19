const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://akashkumarverma369:Irin123@contactlist.5koidre.mongodb.net/?retryWrites=true&w=majority";


const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo")
};




module.exports = connectToMongo;
