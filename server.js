const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const {
    createPlayer
} = require('./controllers/playerController');
const { create } = require('./models/Player');

dotenv.config();

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to Connect to MongoDB: ', err));

const PORT = process.env.PORT || 3000;

app.get('/players/:id', (req, res)=>{

    res.json({message: `GET PLAYERS: Getting player with Id ${req.params.id}`});
});


app.put('/', (req, res)=>{
    res.json({message: 'Welcome to Game Networking'});
});

app.post('/players', createPlayer);

app.delete('/', (req, res)=>{
    res.json({message: 'Welcome to Game Networking'});
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});

