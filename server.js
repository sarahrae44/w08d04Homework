const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static('public'));

const devMoviesController = require('./controllers/devMovies.js');
app.use('/devMovies', devMoviesController);

mongoose.connect('mongodb://localhost:27017/meancrud');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('listening...');
});
