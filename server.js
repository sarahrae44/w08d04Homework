const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const devMoviesController = require('./controllers/devMovies.js');
app.use('/devMovies', devMoviesController);

mongoose.connect('mongodb://localhost:27017/devMoviescrud');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('listening...');
});
