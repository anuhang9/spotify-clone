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

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res)=>{
    res.send("this is root router");
})

app.post('/api/users', userRoutes);
app.post('/api/auth', authRoutes);
app.post('/api/admin', adminRoutes);
app.post('/api/songs', songsRoutes);
app.post('/api/albums', albumsRoutes);
app.post('/api/starts', startRoutes);

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server started in port no ${PORT}`);
})