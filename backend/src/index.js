import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songsRoutes from "./routes/songs.route.js";
import albumsRoutes from "./routes/albums.route.js";
import startRoutes from "./routes/starts.route.js";
import { connectDb } from "./db/connectionDb.js";

import { clerkMiddleware } from '@clerk/express';
import fileUpload from 'express-fileupload';
import path from 'path'

dotenv.config();
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(clerkMiddleware());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024,
    }
}))

app.get('/', (req, res)=>{
    res.send("this is root router");
})

app.post('/api/users', userRoutes);
app.post('/api/auth', authRoutes);
app.post('/api/admin', adminRoutes);
app.post('/api/songs', songsRoutes);
app.post('/api/albums', albumsRoutes);
app.post('/api/starts', startRoutes);

//error handler
app.use((err, req, res, next)=>{
    res.status(500).json({message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message});
})


app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server started in port no ${PORT}`);
})