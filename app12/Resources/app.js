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

var createCustomView = function(title){
	var view = Ti.UI.createView({
		backgroundColor:'#222',
		height:50
	});
	
	var text = Ti.UI.createLabel({
		text: title,
		left:20,
		color:'#fff'
	});
	
	view.add(text);
	
	return view;
};

var section1 = Ti.UI.createTableViewSection({
	headerTitle: 'Section 1'
});

for (var i=0; i< 5 ; i++){
	section1.add(Ti.UI.createTableViewRow({
		title: 'Row ' + i
	}));
}

var section2 = Ti.UI.createTableViewSection({
	headerTitle: 'Section 2',
});

for (var i=5; i<=9 ; i++){
	section2.add(Ti.UI.createTableViewRow({
		title: 'Row ' + i
	}));
}

var tableView = Ti.UI.createTableView({
	headerView: createCustomView('Header View'),
	data: [section1 ,section2],
	footerView: createCustomView('Footer View')
});

tableView.addEventListener('click', function(e){
	alert('Index row at: ' + e.index );
});

win1.add(tableView);



//
//  add tabs
//
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
