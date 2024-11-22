import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    likedSongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: false,
        default: ""
    }],
    likedPlaylists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
        required: false,
        default: ""
    }],
    subscribedArtists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
        default: ""
    }]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);