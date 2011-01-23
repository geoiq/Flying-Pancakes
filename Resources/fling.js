//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Flying Pancakes: Fling!',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'images/KS_nav_views.png',
    title:'Fling',
    window:win1
});

tabGroup.addTab(tab1);

var tweet_text = Titanium.UI.createTextArea({
	hintText: "where you're going and what you're shilling.",
	height: 85,
	width: 300,
	top: 10,
	font: {fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: 'bold'},
	color: '#336699',
	textAlign: 'left',
	appearance: Titanium.UI.KEYBOARD_APPEARANCE_ALERT,	
	keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	returnKeyType: Titanium.UI.RETURNKEY_EMERGENCY_CALL,
	borderWidth: 2,
	borderColor: '#bbb',
	borderRadius: 5,
	suppressReturn: false
});
win1.add(tweet_text);

var tweet_location_label = Titanium.UI.createLabel({
	top: -130,
	left: 15,
	color: '#666',
	text: "Include Current Location?",
	font: {fontSize: 16, fontFamily: 'Helvetica Neue'}
});
win1.add(tweet_location_label);

var tweet_location_checkbox = Titanium.UI.createSwitch({
	title: "Include Current Location: " + false,
	value: false,
	top: 105,
	left: 215
});
win1.add(tweet_location_checkbox);

var tweet_button = Titanium.UI.createButton({
	title: "Fling",
	id: "b", 
	height: 40,
	width: 200,
	top: 145
});
win1.add(tweet_button);

get_location();

tweet_button.addEventListener('click', function() {
	tweet_text.blur();
	var params = [['status', tweet_text.value], ['include_entities', 'true']];
	
	if (tweet_location_checkbox.value) {
        params.push(['lat', location.latitude])
        params.push(['long', location.longitude])
        params.push(['display_coordinates', "true"])

		tweet_location(params);
	}
	send_tweet(params, function() {
	Titanium.UI.createAlertDialog({
		title: 'Flung!',
		message: "You're on your way!"
		}).show();
	});
});

tweet_location_checkbox.addEventListener("change", function(e)
{
	tweet_text.blur();
});
