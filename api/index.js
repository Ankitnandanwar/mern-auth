import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

import userRoutes from "./routes/user.route.js"

dotenv.config();

mongoose.connect(process.env.MONGODBURL).then(() => {
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log('Error connecting to MongoDB:', error);
})

const app = express()

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})


app.use("/api/user", userRoutes)