var app = {};

app.ui = require('ui');
app.ui.win.open();

/*app.ui.win.addEventListener('click', function(){
	app.ui.updateHeading('A new header');
});*/

app.ui.updateHeading('A new header after a few seconds');
