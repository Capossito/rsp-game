//

$(document).ready(function() {

	console.log("yay ready!!!");

	//
	var App = {

		// -- variables top keep track -- //
		timeRemaining: '',
		timeSec: 0,
		timeMin: 0,
		wins: 0,
		draws: 0,
		losses: 0,
		gameReseted: false,


		// Init function runs
		// Starts by caching our templates
		// Set first screen for time input
		// Bind events (buttons mainly)
		init: function(){
			App.cacheElements();
			App.setTimingScreen();
			App.bindEvents();
		},

		//DOM and out Templates
		cacheElements: function(){
			App.$doc = $(document);

			App.$contentArea = $('.main-content');
			App.$templateTimingScreen = $('#select-time-template').html();
			App.$templateGameScreen = $('#game-screen-template').html();
			App.$templateWinnersScreen = $('#winner-annouce-template').html();

		},

		// Set time input screen
		setTimingScreen: function(){
			App.$contentArea.html(App.$templateTimingScreen);

			//lets prevent the user from entering charachters
			//and also lets prevent user from entering a number > than 60
			//no more than one hour playing time.
			$(".times-input").keydown(function (event) {
		        if (event.shiftKey == true) {
		            event.preventDefault();
		        }
		    	
		    	//avoiding special charachters as well
		        if (!((event.keyCode == 190) || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46)) {
		            event.preventDefault();
		    
		        }
		    });
    		
    		//no more than 60 min or 60 sec
		    $(".times-input").keyup(function (event) {
		    
		        var number = parseFloat($(this).val());
		        if(number > 60){
		           $(this).val("");
		        }
		    });
		},


		//this function binds the button pressing events
		bindEvents: function(){
			App.$doc.on('click', '#btn-start-game', App.onStartGamePressed);
			App.$doc.on('click', '#btn-rock', App.onUserRockSelected);
			App.$doc.on('click', '#btn-paper', App.onUserPaperSelected);
			App.$doc.on('click', '#btn-scissors', App.onUserScissorsSelected);
			App.$doc.on('click', '#game-reset', App.onGameResetPressed);


		},


		// -- Main Game Functions and Logic -- //

		//when start button pressed
		//making sure this is not a reseted game
		onStartGamePressed: function(){
			if (App.gameReseted) {

				App.setTimer(App.timeMin, App.timeSec);

				App.$contentArea.html(App.$templateGameScreen);


			}else{

				var values = $('#play-time-form').serializeArray();
				//console.log(values);
				//console.log(values[0]['value']);
				//console.log(values[1]['value']);

				App.timeMin = values[0]['value'];
				App.timeSec = values[1]['value'];
				App.setTimer(values[0]['value'], values[1]['value'])
				//countdown(values[0]['value'], values[1]['value']);

				//after setting time lets bring up the game board.
				App.$contentArea.html(App.$templateGameScreen);

			}
			
		}, 

		//this function is tiggered when time gets to 0
		onTimeFinished: function() {
			//alert("time finished!!!!!");
			var userwins = App.wins;
			var itsDraw = App.draws;
			var compWins = App.losses;
			var arrayScores = [App.wins, App.draws, App.losses];
			console.log(userwins + " "+ itsDraw +" "+ compWins);
			console.log(arrayScores);
			var maxv = Math.max.apply(Math, arrayScores);
			console.log(maxv);

			switch(maxv){
				case App.wins:
					App.winnerMessage('User Wins!!');
					break;
				case App.draws:
					App.winnerMessage('Its a Draw!!');
					break;
				case App.losses:
					App.winnerMessage('Computer Wins!!');
			}

		},

		//this function run after time gets to 0
		//winner is evaluated and shown
		winnerMessage: function(option){
			
			App.$contentArea.html(App.$templateWinnersScreen);
			$('#winners-text').text(option);
		},

		// -- Rock Paper Scissors Logic -- //

		//Possible outcomes for Rock
		onUserRockSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					//alert("rock + rock = draw");
					$('.player-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands1.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					//animation off for now.
					//$('.player-choice').animate({'margin-left': 0});

					$('.computer-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands6.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.draws = App.draws + 1;
					$('.draw-score h4').text(App.draws); 
					break;
				case 2:
					//alert("rock + paper = loss");
					$('.player-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands1.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.player-choice').animate({'margin-left': 0});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands4.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.losses = App.losses + 1;
					$('.loss-score h4').text(App.losses); 
					break;
				case 3:
					//alert("rock + scissors = win");
					$('.player-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands1.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.player-choice').animate({'margin-left': 0});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands2.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.wins = App.wins + 1;
					$('.win-score h4').text(App.wins); 
			}
		},

		//Possible outcomes for Paper
		onUserPaperSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					//alert("paper + rock = win");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands5.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});

					$('.computer-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands6.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.wins = App.wins + 1;
					$('.win-score h4').text(App.wins); 
					break;
				case 2:
					//alert("paper + paper = draw");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands5.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands4.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.draws = App.draws + 1;
					$('.draw-score h4').text(App.draws); 
					break;
				case 3:
					//alert("paper + scissors = loss");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands5.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands2.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.losses = App.losses + 1;
					$('.loss-score h4').text(App.losses); 
			}
		},

		//Possible outcomes for Scissors
		onUserScissorsSelected: function(){
			var compC = App.onComputerChoise();
			console.log(compC);
			switch(compC){
				case 1:
					//alert("scissors + rock = loss");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands3.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});

					$('.computer-choice').css({
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands6.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.losses = App.losses + 1;
					$('.loss-score h4').text(App.losses); 
					break;
				case 2:
					//alert("scissors + paper = win");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands3.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands4.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.wins = App.wins + 1;
					$('.win-score h4').text(App.wins); 
					break;
				case 3:
					//alert("scissors + scissors = draw");
					$('.player-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands3.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'left'
					});
					$('.computer-choice').css({
						width: '226px',
						height: '100px',
						background: 'url("./assets/images/hands/hands2.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.draws = App.draws + 1;
					$('.draw-score h4').text(App.draws); 
			}

		},


		//Timer function
		//params @minutes and @seconds both entered by the user
		setTimer: function(minutes, seconds){
			function countdown(minutes, seconds) {
			    var sec = seconds;
			    var min = minutes;
			    function clock() {
			 
			        var currentMin = min
			        sec--;
			        if (sec === 10 && min === 0) {
			        	alert('hurry up! Time\'s Almost Up');

			        }
			        $('#timer').text( currentMin.toString() + ":" + (sec < 10 ? "0" : "") + String(sec) );
			        if( sec > 0 ) {
			            setTimeout(clock, 1000);
			        } else {
			            currentMin = min-1;
			            if(min > 1){
			                
			                countdown(min-1, 60);           
			                    
			            }else{
			            	if(sec < 1 && min < 1){
			              		App.onTimeFinished();
			              }else{
			              	countdown(0, 60); 
			              }
			            	
			            }
			        }
			    }
			    clock();
			}
			countdown(minutes, seconds);

		},


		//This function return a randomly computer
		//generated choice of Rock Paper Scissors
		onComputerChoise: function(){
			computerChoice = Math.floor((Math.random() * 3) + 1);
			return computerChoice;
		},

		//This function is triggered when the game is reset.
		onGameResetPressed: function(){
			App.gameReseted = true;
			App.wins = 0;
			App.draws = 0;
			App.losses = 0;
			App.onStartGamePressed();

		}

	};

	//Application Initialization
	App.init();
});