// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
Ti.include("version.js");
Ti.include("utils.js");

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "Food Cart tracking";
}

/////
// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
    title: 'Fling',
	url: "fling.js",
    backgroundColor: '#fff'
});
var tab1 = Titanium.UI.createTab({
    icon: 'images/KS_nav_views.png',
    title: 'Fling',
    window: win1
});
tabGroup.addTab(tab1);

/////

var win2 = Titanium.UI.createWindow({
    title: 'Flip',
	url: "flip.js",
    backgroundColor: '#fff'
});
var tab2 = Titanium.UI.createTab({
    icon: 'images/KS_nav_ui.png',
    title: 'Flip',
    window: win2
});
tabGroup.addTab(tab2);  

/////

var win3 = Titanium.UI.createWindow({
	title: 'Preference',
	url: "preference.js",
	backgroundColor: '#fff'
});
var tab3 = Titanium.UI.createTab({
	icon: 'images/KS_nav_ui.png',
	title: 'Preference',
	window: win3
});
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
