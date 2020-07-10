const express = require('express');
const app = express();
app.use(express.json())
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require("./config/db");

dotenv.config({path:'./config/config.env'})
connectDB();

//CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

//routers
const genres = require("./routes/genresRoutes");
app.use('/api/genres', genres);


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.blue.bold));