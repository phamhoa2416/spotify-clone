import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if (!req.auth.userId) {
        return res.status(401).json({ message: "Unauthorized - You must be logged in" });
    }

    next();
};

export const requireAdmin = async (req, res, next) => {
     try {
        const currenntUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currenntUser.primaryEmailAddress?.emailAddress;
        
        if (!isAdmin) {
            return res.status(403).json({ message: "Forbidden - You must be an admin" });
        }

        next();
    } catch (error) {
        
     }
}