<<<<<<< HEAD
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Flying Pancakes: Flip?',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Flip',
    window:win2
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region:{latitude:LOCATION.latitude, longitude:LOCATION.longitude, latitudeDelta:0.01, longitudeDelta:0.01},
    latitude:LOCATION.latitude, longitude:LOCATION.longitude,
    animate:true,
    regionFit:true,
    userLocation:true,
    height: 500
});

win2.add(mapview);

var connectButton = Titanium.UI.createButton({
    title:'Listen',
    width:75,
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
var searchBox = Titanium.UI.createTextField({
    hintText:'Dataset ID',
    width:50,
    style:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
var searchButton = Titanium.UI.createButton({
    title:'Search',
    width:75,
    style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var flexSpace = Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var fixedSpace = Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FIXED_SPACE,
    width:50
});
win2.setToolbar([flexSpace,connectButton,flexSpace,searchBox,flexSpace,searchButton,flexSpace]);


/////////////////////////
// Button event listeners
/////////////////////////
mapview.addEventListener('click', function(e) {
    if (e.annotation) {
        // e.annotation.leftView.image = "http://img.tweetimag.es/i/" + e.title + '_n.png';
    }
});

connectButton.addEventListener('click', function() {
    getLocationTweets(LOCATION.latitude,LOCATION.longitude,10)
    // try {
    //     socket.connect();
    //     Titanium.API.info('Opened!');
    // } catch (e) {
    //     Titanium.API.info('Exception: '+e);
    // }
});

=======
// var mapview = Titanium.Map.createView({
//     mapType: Titanium.Map.STANDARD_TYPE,
//     region:{latitude:LOCATION.latitude, longitude:LOCATION.longitude, latitudeDelta:15, longitudeDelta:15},
//     animate:true,
//     regionFit:true,
//     userLocation:true
// });
// 
// win2.add(mapview);
// 
// var connectButton = Titanium.UI.createButton({
//     title:'Connect',
//     width:75,
//     style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
// });
// var closeButton = Titanium.UI.createButton({
//     title:'Close',
//     width:75,
//     style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
// });
// var clearButton = Titanium.UI.createButton({
//     title:'Clear',
//     width:75,
//     style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
// });
// 
// var flexSpace = Titanium.UI.createButton({
//     systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
// });
// var fixedSpace = Titanium.UI.createButton({
//     systemButton:Titanium.UI.iPhone.SystemButton.FIXED_SPACE,
//     width:50
// });
// win2.setToolbar([flexSpace,connectButton,flexSpace,closeButton,flexSpace,clearButton,flexSpace]);
// 
// 
// /////////////////////////
// // Button event listeners
// /////////////////////////
// mapview.addEventListener('click', function(e) {
//     if (e.annotation) {
//         e.annotation.leftView.image = "http://img.tweetimag.es/i/" + e.title + '_n.png';
//     }
// });
// 
// connectButton.addEventListener('click', function() {
//     getLocationTweets(38.85,-77.26,10)
//     // try {
//     //     socket.connect();
//     //     Titanium.API.info('Opened!');
//     // } catch (e) {
//     //     Titanium.API.info('Exception: '+e);
//     // }
// });
// 
>>>>>>> 6762ba87b7205ffc467543a80867b943c8a03735
// closeButton.addEventListener('click', function() {
//     try {
//         socket.close();
//     } catch (e) {
//         Titanium.API.info('Exception: '+e);
//     }
// });

searchButton.addEventListener('click', function() {
    mapview.removeAllAnnotations();
    mapview.setLocation({latitude:LOCATION.latitude, longitude:LOCATION.longitude, latitudeDelta:0.01, longitudeDelta:0.01})
    getData("5956", LOCATION.latitude,LOCATION.longitude, 10)
});



/////////////////////////
// Socket event listener
/////////////////////////

// var socket = Titanium.Network.createTCPSocket({
//     hostName:'localhost',
//     port:6969,
//     mode:Titanium.Network.READ_MODE
// });
// 
// socket.addEventListener('read', function(e) {
//     //Titanium.API.info(e['from'] + ':' + e['data'].text);
//     try {
//         var tweet = JSON.parse(e.data.text);
// 
//         mapTweet(tweet);
// 
//     } catch (exception) {
//         Titanium.API.info('Exception: '+ exception);
//     }
// });
// 
// tabGroup.addEventListener('close', function(e) {
//     if (socket.isValid) {
//         socket.close();
//     }
// });
