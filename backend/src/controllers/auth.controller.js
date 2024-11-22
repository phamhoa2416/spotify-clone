import { User } from '../models/user.model.js';

export const authCallback = async (req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body || {};
        
        const user = await User.findOne({clerkId: id});

        if (!user) {
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            })
        }
    } catch (error) {
        console.log(`Error in auth callback route: ${error}`);
        res.status(500).json({
            message: "An error occurred while processing your request. Please try again later.",
            error: error.message
        });
    }
};
