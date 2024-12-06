import { Playlist } from '../models/playlist.model.js'; 

export const getAllPlaylists = async (req, res, next) => {
    try {
        const playlists = await Playlist.find();
        res.status(200).json(playlists);
    } catch (error) {
        next(error);
    }
};

export const getPlaylistById = async (req, res, next) => {
    try {
        const { playlistId } = req.params;

        const playlist = await Playlist.findById(playlistId).populate("songs");

        if (!playlist) {
            return res.status(404).json({ message: `Playlist not found` });
        }

        res.status(200).json(playlist);
    } catch (error) {
        next(error);
    }
};