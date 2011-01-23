var get_location = function(callback) {
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;
    Titanium.Geolocation.getCurrentPosition(function(e){
        if (!e.success || e.error)
        {
            alert('error ' + JSON.stringify(e.error));
            Ti.API.info('error ' + JSON.stringify(e.error));
            return e;
        }

        // var longitude = e.coords.longitude;
        // var latitude = e.coords.latitude;
        // var altitude = e.coords.altitude;
        // var heading = e.coords.heading;
        // var accuracy = e.coords.accuracy;
        // var speed = e.coords.speed;
        // var timestamp = e.coords.timestamp;
        // var altitudeAccuracy = e.coords.altitudeAccuracy;
        Ti.API.info('Location: ' + e.coords.longitude + ", " + e.coords.latitude);
        
        LOCATION = e.coords;
        if(callback)
            callback.call(LOCATION);
    });	    
}