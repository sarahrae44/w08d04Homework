const express = require('express');
const router = express.Router();
const DevMovies = require('../models/devMovies.js');

router.get('/', function(req, res){
    Todos.find({}, function(err, foundDevMovies){
        res.json(foundDevMovies);
    });
});

router.post('/', (req,res)=>{
  Todos.create(req.body, function(err, createdDevMovie){
       res.json(createdDevMovie);
     });
});

router.delete('/:id', function(req, res){
    Todos.findByIdAndRemove(req.params.id, function(err, deletedDevMovie){
        res.json(deletedDevMovie);
    });
});

router.put('/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDevMovie)=>{
        res.json(updatedDevMovie);
    });
});

module.exports = router;
