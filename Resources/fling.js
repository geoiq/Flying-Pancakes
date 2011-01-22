
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Fling',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'images/KS_nav_views.png',
    title:'Fling',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	top:10,
	left:10,
	color:'#999',
	text:"Where y'off to?",
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
});

win1.add(label1);

var tweet_text = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:250,
	height:40,
	hintText:"where you're going and what you're shilling.",
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win1.add(tweet_text);

var tweet_location_label = Titanium.UI.createLabel({
	top:70,
	left:10,
	color:'#999',
	text:"Include Current Location?",
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
});
win1.add(tweet_location_label);

var tweet_location_checkbox = Titanium.UI.createSwitch({
		title:"Include Current Location: " + false,
		value:false,
		top:70,
		left:60
});
win1.add(tweet_location_checkbox)

var tweet_button = Ti.UI.createButton({ 
    top: 100, 
    left: 100, 
    height: 30, 
    width: 80, 
    id:"b", 
    title:"Fling!"}); 
win1.add(tweet_button);

tweet_button.addEventListener('click',function() {
    var params = [['status', tweet_text.value],['include_entities','true']];
    if(tweet_location_checkbox.value) {
        tweet_location(params);
    } else {
        send_tweet(params, function() {
            Titanium.UI.createAlertDialog({
            	title:'Flung!',
            	message:"You're on your way!"
            }).show();    
            
        });        
    }
    
});


//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({
	title: 'Preference',
	url: "Preference.js",
	backgroundColor: '#fff'
});
var tab3 = Titanium.UI.createTab({
	icon: 'images/KS_nav_ui.png',
	title: 'Preference',
	window: win3
});

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab3);
