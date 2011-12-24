var win = Ti.UI.createWindow({
	backgroundColor:'#fff'
});


var grid = require('gridlines');
grid.drawgrid(20, win);

var view = Ti.UI.createView({
	backgroundColor:'transparent',
	top:0,
	left:0,
	width:'100%',
	height:'100%',
	//layout:'vertical'
	layout:'horizontal'
	//layout:'absolute'
});

function makeView(color) {
	return Ti.UI.createView({
		top:20,
		left:20,
		width:20,
		height:20,
		backgroundColor:color
	});
}
view.add(makeView('pink'));
view.add(makeView('brown'));
view.add(makeView('gray'));
view.add(makeView('black'));

win.add(view);
win.open();
