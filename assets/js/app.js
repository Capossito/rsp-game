$(document).ready(function() {
	console.log("yay ready!!!");

	var App = {

		init: function(){
			App.cacheElements();
			App.setTimingScreen();
			App.bindEvents();
		},

		cacheElements: function(){
			App.$doc = $(document);

			App.$contentArea = $('.main-content');
			App.$templateTimingScreen = $('#select-time-template').html();
			App.$templateGameScreen = $('#game-screen-template').html();

		},

		setTimingScreen: function(){
			App.$contentArea.html(App.$templateTimingScreen);
		},

		bindEvents: function(){
			App.$doc.on('click', '#btn-start-game', App.onStartGamePressed);

		},


		//game functions

		onStartGamePressed: function(){
			App.$contentArea.html(App.$templateGameScreen);
		}

	};

	App.init();
});