Ti.include('js/titanium_oauth.js');
Ti.include("twitter.js");
Ti.include("location.js");
Ti.include("utils.js");

var win = Titanium.UI.currentWindow;

var lbl1 = Titanium.UI.createLabel({
	text: "Where you're going and what you're shilling?",
	width: 220,
	height: 50,
	top: 5,
	color: '#336699',
	textAlign: 'center'
});
win.add(lbl1);

var tweet_text = Titanium.UI.createTextArea({
	height: 85,
	width: 300,
	top: 65,
	font: {fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: 'bold'},
	color: '#336699',
	textAlign: 'left',
	appearance: Titanium.UI.KEYBOARD_APPEARANCE_ALERT,
	keyboardType: Titanium.UI.KEYBOARD_ASCII,
	borderWidth: 2,
	borderColor: '#bbb',
	borderRadius: 5,
	suppressReturn: false
	
});
win.add(tweet_text);

var tweet_location_label = Titanium.UI.createLabel({
	top: -20,
	left: 15,
	color: '#666',
	text: "Include Current Location?",
	font: {fontSize: 16, fontFamily: 'Helvetica Neue'}
});
win.add(tweet_location_label);

var tweet_location_checkbox = Titanium.UI.createSwitch({
	title: "Include Current Location: " + false,
	value: false,
	top: 160,
	left: 215
});
win.add(tweet_location_checkbox);

var tweet_button = Titanium.UI.createButton({
	title: "Fling",
	id: "b", 
	height: 40,
	width: 200,
	top: 200
});
win.add(tweet_button);

tweet_button.addEventListener('click', function() {
	tweet_text.blur();
	var params = [['status', tweet_text.value], ['include_entities', 'true']];
	if (tweet_location_checkbox.value) {
		tweet_location(params);
	} else {
		send_tweet(params, function() {
		Titanium.UI.createAlertDialog({
			title: 'Flung!',
			message: "You're on your way!"
			}).show();
		});
	}
});

tweet_location_checkbox.addEventListener("change", function(e)
{
	tweet_text.blur();
});
