import express from "express";
import dotenv from "dotenv";

import { clerkMiddleware } from '@clerk/express'
import { connectDB } from "./lib/database.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware())

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})