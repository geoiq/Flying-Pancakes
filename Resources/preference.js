Ti.include("utils.js");

var win = Titanium.UI.currentWindow;

var lbl1 = Titanium.UI.createLabel({
	text: 'GeoCommons Login Information',
	width: 240,
	height: 35,
	top: 5,
	color: '#336699',
	textAlign: 'center'
});

var gc_username = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 45,
	width: 250,
	hintText: "Username",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var gc_password = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 85,
	width: 250,
	hintText: "Password",
	passwordMask: true,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var gc_mapid = Titanium.UI.createTextField({
	color: '#336699',
	height: 35,
	top: 135,
	width: 250,
	hintText: "Map ID",
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var authenticate = Titanium.UI.createButton({
	title: 'Authenticate',
	height: 40,
	width: 200,
	top: 185
});


win.add(lbl1);
win.add(gc_username);
win.add(gc_password);
win.add(gc_mapid);
win.add(authenticate);


authenticate.addEventListener('click', function()
{
	gc_username.blur();
	gc_password.blur();
	gc_mapid.blur();
	
	trace("GC Username : " + gc_username.value + "\n" + "GC Password : " + gc_password.value + "\n" + "Map ID : " + gc_mapid.value);
});
