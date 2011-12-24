(function(){
	app.ui = {};
	
	app.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundColor:'red'
		});
		
		var header = Ti.UI.createLabel({
			text: 'Mi primer app con titanium',
			top: 10,
			height: 'auto',
			width: 'auto'
		});
		
		win.add(header);
		return win;
	};
})();
