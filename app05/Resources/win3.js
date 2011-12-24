var win3 = Ti.UI.currentWindow

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:win3.mylabel,
	font:{fontSize: 20, fontFamily:'Arial'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);
label3.addEventListener('click', function(){
	Ti.App.fireEvent('labelclicked', {newlabel:'From subcontext'})
});