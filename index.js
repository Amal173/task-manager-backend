const express = require('express');
require('dotenv').config();
const {connectDb}=require('./config/dbconnection')
const taskRouter=require('./router/taskRouter')
const cors=require('cors')
connectDb();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/task',taskRouter)
const port=process.env.PORT
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})