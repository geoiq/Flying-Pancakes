// Helper library for calling to GeoIQ server and loading data.
// 
// Author: Andrew Turner

// TODO: make this an configuration option at build time, rather than in the code.
var GEOIQ_SERVER = "http://geocommons.com"

function getData(id,lat,lon, distance, limit){
    // create table view data object
    var data = [];
    if(limit == undefined || limit == null) { limit = 10; }
    var url = GEOIQ_SERVER + "/datasets/" + id + "/features.json?";
    url += "lat=" + lat + "&lon=" + lon + "&radius=" + distance + "&limit=" + limit
    var xhr = Ti.Network.createHTTPClient();
    xhr.timeout = 1000000;
    xhr.open("GET",url);
    Ti.API.info("getting features")

    xhr.onload = function()
    {

        try
        {
            var features = eval('('+this.responseText+')');
            Ti.API.info("got" + features.length +" features")
            for (var c=0;c<features.length;c++){
                mapData(features[c])
                // data[c] = tableData(features[c], c)
            }
            // Create the tableView and add it to the window.
            // var tableview = Titanium.UI.createTableView({data:data,minRowHeight:58});
            // win2.add(tableview);

            // Titanium.UI.currentWindow.add(tableview);
        }
        catch(E){
            Ti.API.info("Error:" + E)
            alert(E);
        }
    };
    // Get the data
    xhr.send();
}

function mapData(feature) {
    var featureAnnotation = Titanium.Map.createAnnotation({
        latitude: parseFloat(feature.latitude),
        longitude: parseFloat(feature.longitude),
        title: feature.restaurant,
        subtitle: feature.cuisine,
        pincolor: Titanium.Map.ANNOTATION_RED,
        animate:true
    });

    mapview.addAnnotation(featureAnnotation);
}