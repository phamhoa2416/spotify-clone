import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";

import { connectDB } from "./lib/database.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/song.route.js";
import userRoutes from "./routes/user.route.js";
import albumRoutes from "./routes/album.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true 
    }
));

app.use(express.json());
app.use(clerkMiddleware());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})
);

app.use((err, req, res, next) => {
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message});
}) 

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})