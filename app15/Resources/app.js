// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    fullscreen: false,
    orientationModes:[
    	Ti.UI.PORTRAIT,
    	Ti.UI.UPSIDE_PORTRAIT
    ]
});

var label = Ti.UI.createLabel({
	text: "orientacion"
});

win.add(label);

Ti.Gesture.addEventListener('orientationchange', function(e){
	Ti.UI.orientation = e.orientation;
});
win.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.FACE_UP,
	Titanium.UI.FACE_DOWN
]; 

win.open();
