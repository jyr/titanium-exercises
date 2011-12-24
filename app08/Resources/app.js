var win = Ti.UI.createWindow({
	backgroundColor: '#fff',
	whichObj:'window'
});

function doSomething(e){
	Ti.API.info('The ' + e.type + 'event happened');
}

win.addEventListener('click', function(e){
	Ti.API.info('Window');
	Ti.API.info('The ' + e.type + ' event happened');
});

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	width:'80%',
	height:'80%'
});

view.whichObj = 'view';
view.addEventListener('click', function(){
	Ti.API.info('View');
});

var button = Ti.UI.createButton({
	title:'Hey!',
	height: 50,
	whichObj:'button'
});

button.addEventListener('click', function(){
	Ti.API.info('Button');
	Ti.App.fireEvent('changeBG', {newcolor: 'green'});
});

view.add(button);

Ti.App.addEventListener('changeBG', function(e){
	view.backgroundColor = e.newcolor;
});


win.add(view);
win.open();
