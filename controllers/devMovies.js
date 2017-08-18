const express = require('express');
const router = express.Router();
const DevMovies = require('../models/devMovies.js');

router.get('/', function(req, res){
    DevMovies.find({}, function(err, foundDevMovies){
        res.json(foundDevMovies);
    });
});

router.post('/', (req,res)=>{
  console.log(req.body);
  DevMovies.create(req.body, function(err, createdDevMovie){

       res.json(createdDevMovie);
     });
});

router.delete('/:id', function(req, res){
    DevMovies.findByIdAndRemove(req.params.id, function(err, deletedDevMovie){
        res.json(deletedDevMovie);
    });
});

router.put('/:id', (req, res)=>{
    DevMovies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDevMovie)=>{
        res.json(updatedDevMovie);
    });
});

module.exports = router;
