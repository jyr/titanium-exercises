// define a namespace for your app
var tv = {};

// write the self-calling function that define's your app's UI
(function() {
	// define the UI namespace for your app
	tv.ui = {};
	
	// define your app's main window
	tv.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundImage:'images/gradientBackground.png'
		});
		
		// define the custom page heading here
		var pageHeading = Ti.UI.createLabel({
			text: 'Custom Label',
			color: '#3E3F87',
			font: {fontSize:18, fontWeight:'bold'},
			top:1,
			left:10,
			height:30
		});
		win.add(pageHeading);
		
		/**
		  * Write a function named makeRow() that will create and return a table row.
		  * Each row should have two image and two labels per the lab instructions
		  * Your images will need custom properties so that you can distinguish which received
		  * the click event and swap images accordingly
		  * 
		  * makeRow()
		  * 	@param {Object} _params   Map of row parameters: rownum, primarylabel, secondarylabel, myImage
		  * 	@return {Object}    Returns the row.
		  */		
		var makeRow = function(_params) {
			var row = Ti.UI.createTableViewRow({
				height:75,
				backgroundColor: 'transparent',
				backgroundImage:'images/middleRow.png',
				selectedBackgroundImage:'images/middleRowSelected.png',
			});
			
			var leftImage = Ti.UI.createImageView({
				image: (_params.rownum % 2 == 0) ? 'images/imageA.png' : 'images/imageB.png',
				height: 64,
				left:10,
				width:64,
				myimage: _params.myimage
			});
			
			if(_params.rownum == 0){
				Ti.API.info('num ' + _params.rownum)
				row.backgroundImage = 'images/topRow.png',
				row.selectedBackgroundImage = 'images/topRowSelected.png'
			}else if (_params.rownum == 'last'){
				row.backgroundImage = 'images/bottomRow.png',
				row.selectedBackgroundImage = 'images/bottomRowSelected.png',
				leftImage.image = 'images/imageC.png'
			}
			
			row.add(leftImage);
			
			var primarylabel = Ti.UI.createLabel({
				text: _params.primarylabel,
				top:20,
				left: 80,
				height: 'auto',
				color:'black',
				font:{fontSize:16, fontWeight:'bold'}
			});
			row.add(primarylabel);
			
			var secondarylabel = Ti.UI.createLabel({
				text: _params.secondarylabel,
				top:40,
				left: 80,
				height: 'auto',
				color:'black',
				font:{fontSize:13, fontWeight:'bold'}
			});
			row.add(secondarylabel);
			
			var rightImage = Ti.UI.createImageView({
				image: 'images/notificationBadge.png',
				width:25,
				height:22,
				right:10,
				top:30,
				myimage: 'blue'
			});
			row.add(rightImage);
			
			return row;
		};
		
		// declare an array to hold your table rows
		var tbldata = [];
		// use a loop to create at least 8 rows
		for(var i=0; i<8;i++){
			tbldata.push(makeRow({
				rownum: i, 
				primarylabel: 'This is a row ' + i,
				secondarylabel: 'Subtitle ' + i,
				myimage: (i % 2 == 0) ? 'a' : 'b'
			}));
		}
		tbldata.push(makeRow({
			rownum: 'last', 
			primarylabel: 'This is the last row ',
			secondarylabel: 'The last subtitle ',
			myimage: 'c'
		}));
		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width: '90%',
			height: '85%',			
			backgroundColor: 'transparent',
			separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
		});
		
		table.setData(tbldata);
		win.add(table);

		// set the click event listener
		// if the source is the A/B/C letter, step to the next letter in sequence
		// if the source is the notification badge, swap the red/blue version
		table.addEventListener('click', function(e){
			Ti.API.info('LOGGER ' + e.source);
			Ti.API.info('LOGGER ' + e.source.height);
			Ti.API.info('LOGGER ' + e.source.myimage);
			Ti.API.info('LOGGER ' + e.source.text);
			switch(e.source.myimage){
				case 'a':
					e.source.image = 'images/imageB.png';
					e.source.myimage = 'b';
				break;
				case 'b':
					e.source.image = 'images/imageC.png';
					e.source.myimage = 'c';
				break;
				case 'c':
					e.source.image = 'images/imageA.png';
					e.source.myimage = 'a';
				break;
				case 'red':
					e.source.image = 'images/notificationUnreadBadge.png';
					e.source.myimage = 'blue';
				break;
				case 'blue':
					e.source.image = 'images/notificationBadge.png';
					e.source.myimage = 'red';
				break;
			}
		});
		
		return win;
	}
	
})();

// create your app's main window and open it
var w = tv.ui.createApplicationWindow();
w.open();

