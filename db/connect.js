const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://irisd:idHealth1@cluster0.mxzkm.mongodb.net/testDB?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })
}

module.exports = connectDB;