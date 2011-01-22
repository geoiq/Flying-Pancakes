var win = Titanium.UI.currentWindow;

var scrolly = Titanium.UI.createScrollView({contentHeight: 'auto'});
win.add(scrolly);

var topY = 5;
var lbl1 = Titanium.UI.createLabel({
	text: 'Twitter Login Information',
	width: 240,
	height: 35,
	top: 5,
	color: '#336699',
	textAlign: 'center'
});

var tw_username = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 45,
	width: 250,
	value: "Username",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var tw_password = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 85,
	width: 250,
	value: "Password",
	passwordMask: true,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var line = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'images/Line.png');

var imageView = Titanium.UI.createImageView({
	image: line,
	width: 300,
	height: 4,
	top: 130
});


var lbl2 = Titanium.UI.createLabel({
	text: 'GeoCommons Login Information',
	width: 240,
	height: 35,
	top: 135,
	color: '#336699',
	textAlign: 'center'
});

var gc_username = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 175,
	width: 250,
	value: "Username",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var gc_password = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 215,
	width: 250,
	value: "Password",
	passwordMask: true,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var gc_mapid = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 265,
	width: 250,
	value: "Map ID",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var authenticate = Titanium.UI.createButton({
	title: 'Authenticate',
	height: 40,
	width: 200,
	top: 315
});


scrolly.add(lbl1);
scrolly.add(tw_username);
scrolly.add(tw_password);
scrolly.add(imageView);
scrolly.add(lbl2);
scrolly.add(gc_username);
scrolly.add(gc_password);
scrolly.add(gc_mapid);
scrolly.add(authenticate);


function trace(theMessage)
{
	var msg = Titanium.UI.createAlertDialog({message: theMessage});
	msg.show();
}


authenticate.addEventListener('click', function()
{
	trace("Twitter Username : " + tw_username.value + "\n" + "Twitter Password : " + tw_password.value + "\n" + "GC Username : " + gc_username.value + "\n" + "GC Password : " + gc_password.value + "\n" + "Map ID : " + gc_mapid.value);
});
