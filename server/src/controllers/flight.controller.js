const Flight =require('../models/flight.model');
exports.findAll = function(req, res){
    Flight.findAll(function(err, flight){
        console.log("controller");
        if(err)
        res.send(err);
        console.log('res',flight);
        res.send(flight);
    });
};