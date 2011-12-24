var win = Ti.UI.createWindow({
	backgroundColor:'green'
});

var header = Ti.UI.createLabel({
	text: 'My second app with Titanium',
	top: 10,
	color:'white',
	height:'auto',
	width:'auto'
});

win.add(header);

exports.win = win;

function updateHead(str){
	header.text = str;
	Ti.API.info('LOGGER:' + str );
}

exports.updateHeading = function(str){
	setTimeout(function(){
		updateHead(str);
	}, 2000);
}
