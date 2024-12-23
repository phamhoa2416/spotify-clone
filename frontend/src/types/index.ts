export interface Song {
    _id: string;
    name: string;
    artist: string;
    albumID: string | null;
    imageUrl: string;
    audioUrl: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
}

export interface Album {
    _id: string;
    name: string;
    artist: string;
    imageUrl: string;
    releaseYear: number;
    songs: Song[];
}

export interface Stats {
    totalSongs: number;
    totalAlbums: number;
    totalArtists: number;
    totalUsers: number;
}