const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth')
const dummyRoute = require('./routes/dummy')
const allRoutes = require('./routes/index')



dotenv.config();//adds .env to process and can be used throughout the project using process.env

const app = express();//create insatance of express 
app.use(express.json());//parse the json that we passed and attach it in req.body

app.use('/api',allRoutes);//register a router for index.js and handle request starts with /api


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
