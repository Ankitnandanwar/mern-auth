import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors'

// Handling cors policy issue
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors(corsOptions))


mongoose.connect(process.env.MONGODBURL)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err)
    })

app.listen(8500, () => {
    console.log('Server is running on port 8500');
})


app.use("/user", userRoutes)
app.use("/auth", authRoutes)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
})