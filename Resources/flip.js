//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Flip',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Flip',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Am I done on this side?',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


//
//  add tabs
//
tabGroup.addTab(tab2);  
