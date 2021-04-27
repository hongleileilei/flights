var dbConn = require('./../../config/db.config');
var Flight = function(flight){
    this.DepLat = flight.DepLat;
    this.DepLng = flight.DepLng;
    this.ArrLat = flight.ArrLat;
    this.ArrLng = flight.ArrLng;
    this.id = flight.id;
};

Flight.findAll = function (result){
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

Flight.findByDep = function(result){
    dbConn.query("SELECT * FROM flights ORDER BY `DepLng` ASC, `DepLat` ASC;",
    function(err, res){
        if(err){
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("flights: ",res);
            return(null, res);
        }
    });
};

module.exports = Flight;