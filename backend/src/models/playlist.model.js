import mongoose  from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: false,
    }]
}, { timestamps: true });

export const Playlist = mongoose.model("Playlist", playlistSchema);