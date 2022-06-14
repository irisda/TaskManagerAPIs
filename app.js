const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);
//Connect to Db
const startServe = async () => {
    try {
        await connectDB(process.env.DB_CONNECTION);
        app.listen(port, console.log(`Server is running in port ${port}`));
    }
    catch (err) {
        console.log(err)
    }
}

startServe()


