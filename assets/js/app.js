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
			App.$doc.on('click', '#btn-rock', App.onUserRockSelected);
			App.$doc.on('click', '#btn-paper', App.onUserPaperSelected);
			App.$doc.on('click', '#btn-scissors', App.onUserScissorsSelected);


		},


		//game functions

		onStartGamePressed: function(){
			var values = $('#play-time-form').serializeArray();
			console.log(values);

			//App.startCountDown;
			countdown(1);

			App.$contentArea.html(App.$templateGameScreen);
		}, 

		onTimeFinished: function() {
			//alert("time finished!!!!!");
		},

		onUserRockSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					alert("rock + rock = draw");
					break;
				case 2:
					alert("rock + paper = loss");
					break;
				case 3:
					alert("rock + scissors = win");
			}
		},

		onUserPaperSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					alert("paper + rock = win");
					break;
				case 2:
					alert("paper + paper = draw");
					break;
				case 3:
					alert("paper + scissors = loss");
			}

		},

		onUserScissorsSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					alert("scissors + rock = loss");
					break;
				case 2:
					alert("scissors + paper = win");
					break;
				case 3:
					alert("scissors + scissors = draw");
			}

		},

		onComputerChoise: function(){
			computerChoice = Math.floor((Math.random() * 3) + 1);
			return computerChoice;


		}

		//settings functions
		

			//countdown(1);

	};

	function countdown(minutes){
				var sec = 60;
				var min = minutes;
				function clock(){
					//var counter = $("#timer");
					var current_min = min-1;
					sec--;
					$('#timer').text(current_min.toString() + ":" + (sec < 10 ? "0" : "" ) + String(sec) );
					if (sec > 0) {
						setTimeout(clock, 1000);
					}else{
						if(min > 1){
							countdown(min - 1);
						}else{
							//alert("countdown finished!!!");
							App.onTimeFinished();
						}
					}
				}
				clock();
			}

	App.init();
});