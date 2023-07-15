import express from "express";

const app = express();
app.use(express.json()); // parse data

// Big variable for the playlist
let playlist = [];

// Add a song to the playlist
app.post('/playlist', (req, res) => {
    const {id, title, artists, url } = req.body;

    // Validation req data
    if (!title || !artists || !url) {
        return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Add to the playlist
    const song = {id, title, artists, url };
    playlist.push(song);

    res.status(201).json({ message: 'Song added to the playlist', song });
});

// Get song by id
app.get('/playlist/:id', (req, res) => {
    const id = req.params.id;

    // Find the song in the playlist
    const song = playlist.find((song) => song.id === id);

    if (!song) {
        return res.status(404).json({ message: 'Song not found' });
    }

    //PLAY SONG
    res.redirect(song.url);

    res.status(200).json({ message: 'Playing song', song });
});

// Get the list of songs from the playlist
app.get('/playlist', (req, res) => {
    res.status(200).json({ playlist });
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
