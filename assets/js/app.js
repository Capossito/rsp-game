$(document).ready(function() {
	console.log("yay ready!!!");

	var App = {

		timeRemaining: '',
		wins: 0,
		draws: 0,
		losses: 0,

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
			console.log(values[0]['value']);
			console.log(values[1]['value']);

			//App.startCountDown;
			countdown(values[0]['value'], values[1]['value']);

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
					//alert("rock + rock = draw");
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
						width: '158px',
						height: '100px',
						background: 'url("./assets/images/hands/hands6.png")',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						float: 'right'
					});
					App.draws = App.draws + 1;
					$('.draw-score').text(App.draws); 
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
					$('.loss-score').text(App.losses); 
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
					$('.win-score').text(App.wins); 
			}
		},

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
					$('.win-score').text(App.wins); 
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
					$('.draw-score').text(App.draws); 
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
					$('.loss-score').text(App.losses); 
			}
		},

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
					$('.loss-score').text(App.losses); 
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
					$('.win-score').text(App.wins); 
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
					$('.draw-score').text(App.draws); 
			}

		},

		onComputerChoise: function(){
			computerChoice = Math.floor((Math.random() * 3) + 1);
			return computerChoice;
		}

		//settings functions
		

			//countdown(1);

	};

	function countdown(minutes, seconds){
				var sec = seconds;
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
							countdown(min - 1, 60);
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