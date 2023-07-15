let playlist = [
    {
        id: "1",
        title: "LEXICON",
        artists: ["Isyana Saraswati"],
        url: "https://open.spotify.com/track/6JiOiuUMij21xRYZRhWxW5?si=56856355b5cb4087",
        countPlay : 0
    },
    {
        id: "2",
        title: "IL SOGNO",
        artists: ["Isyana Saraswati", "DeadSquad"],
        url: "https://open.spotify.com/album/0ZHh1pZS6TTTwAzkIAtiLg?si=z_DjKxTfQUiXAP-iltz9zw",
        countPlay : 0
    }
]

function generateSongId() {
    return Math.random().toString(10).substr(2, 6)
}

export function getAllSong() {
    // sorting most played song
    const sortPlaylist = playlist.sort((a, b) => b.countPlay - a.countPlay)
    return sortPlaylist;
}

export function playSong(songId) {
    const playing = playlist.find((c) => c.id === songId);
    playing.countPlay ++;
    return playlist.find((c) => c.id === songId);
}

export function createSong(title, artists, url) {
    let newSong = {
        id: generateSongId(),
        title,
        artists,
        url,
        countPlay : 0
    }
    playlist.push(newSong);
    return newSong
}