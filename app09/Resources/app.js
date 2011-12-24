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

var data = [
	{title: 'Row 1'},
	{title: 'Row 2'},
	{title: 'Row 3'},
	{title: 'Row 4'},
	{title: 'Row 5'},
	{title: 'Row 6'},
	{title: 'Row 7'},
	{title: 'Row 8'},
	{title: 'Row 9'},
	{title: 'Row 10'}
];

var table = Ti.UI.createTableView({
	height: '100%',
	backgroundColor: 'transparent',
	headerTitle: 'My head',
	//data: data,
	footerTitle:'My footer',
	//rowHeight: 15,
	//scrollable: false
});

table.setData(data);
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
