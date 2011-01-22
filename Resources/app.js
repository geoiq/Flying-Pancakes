// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
Ti.include('js/titanium_oauth.js');

Ti.include("version.js");

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "Food Cart tracking";
}



// create tab group
var tabGroup = Titanium.UI.createTabGroup();

Ti.include("twitter.js");
Ti.include("location.js");
Ti.include("fling.js")
Ti.include("flip.js")

// open tab group
tabGroup.open();
