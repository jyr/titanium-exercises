// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});


var table = Ti.UI.createTableView({
	height: '100%',
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	scrollable: false
});

table.data = [
	{title: 'Row 1', header:'Header 1', leftImage: 'KS_nav_ui.png', hasChild: true},
	{title: 'Row 2', backgroundColor: '#cc9', hasDetail: true},
	{title: 'Row 3', header: 'Header 2', rightImage: 'KS_nav_ui.png'},
	{title: 'Row 4', hasCheck: true}
];
win1.add(table);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
