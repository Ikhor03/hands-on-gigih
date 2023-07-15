import express from "express";
import { createSong, getAllSong, playSong } from "./model.js";

const app = express();
app.use(express.json()); // parse data


// Add a song to the playlist
app.post('/playlist', (req, res) => {
    const {id, title, artists, url } = req.body;

    // Validation req data
    if (!title || !artists || !url) {
        return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Add to the playlist
    const song = {id, title, artists, url };
    createSong(song);

    res.status(201).json({ message: 'Song added to the playlist', song });
});

// Get song by id then play the music
app.get('/playlist/:id', (req, res) => {
    const id = req.params.id;

    // Find the song in the playlist
    const song = playSong(id);

    if (!song) {
        return res.status(404).json({ message: 'Song not found' });
    }

    //PLAY SONG
    // res.redirect(song.url);

    res.status(200).json({ message: 'Playing song', song });
});

// Get the list of songs, sorted by most played
app.get('/playlist', (req, res) => {
    const playlist = getAllSong();
    res.status(200).json({ playlist });
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
