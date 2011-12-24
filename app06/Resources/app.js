var win = Ti.UI.createWindow({
	backgroundColor:'#fff'
});

var pinkview = Ti.UI.createView({
	top:20,
	left:20,
	width:10,
	height:10,
	backgroundColor:"pink"
});

var brownview = Ti.UI.createView({
	bottom:100,
	right:100,
	width:10,
	height:10,
	backgroundColor: "brown"
});

var grayview = Ti.UI.createView({
	center:{x:160, y:240},
	width:50,
	height:50,
	backgroundColor:"gray"
});

var blackview = Ti.UI.createView({
	top: 40,
	width:10,
	height:10,
	backgroundColor:"black"
});

win.add(blackview);
win.add(grayview);
win.add(brownview);
win.add(pinkview);

win.open();
