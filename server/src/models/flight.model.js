var dbConn = require('./../../config/db.config');
var Flight = function(flight){
    this.DepLat = flight.DepLat;
    this.DepLng = flight.DepLng;
    this.ArrLat = flight.ArrLat;
    this.ArrLng = flight.ArrLng;
};

Flight.findAll = function (result, Lat, Lng){
    dbConn.query("SELECT * FROM flights;", 
    function(err, res){
        if(err){
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("flights: ",res);
            result(null, res);
        }
    });
};

module.exports = Flight;