$(document).ready(function(){console.log("yay ready!!!");var e={timeRemaining:"",timeSec:0,timeMin:0,wins:0,draws:0,losses:0,gameReseted:!1,init:function(){e.cacheElements(),e.setTimingScreen(),e.bindEvents()},cacheElements:function(){e.$doc=$(document),e.$contentArea=$(".main-content"),e.$templateTimingScreen=$("#select-time-template").html(),e.$templateGameScreen=$("#game-screen-template").html(),e.$templateWinnersScreen=$("#winner-annouce-template").html()},setTimingScreen:function(){e.$contentArea.html(e.$templateTimingScreen),$(".times-input").keydown(function(e){1==e.shiftKey&&e.preventDefault(),190==e.keyCode||e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105||8==e.keyCode||9==e.keyCode||37==e.keyCode||39==e.keyCode||46==e.keyCode||e.preventDefault()}),$(".times-input").keyup(function(e){var s=parseFloat($(this).val());s>60&&$(this).val("")})},bindEvents:function(){e.$doc.on("click","#btn-start-game",e.onStartGamePressed),e.$doc.on("click","#btn-rock",e.onUserRockSelected),e.$doc.on("click","#btn-paper",e.onUserPaperSelected),e.$doc.on("click","#btn-scissors",e.onUserScissorsSelected),e.$doc.on("click","#game-reset",e.onGameResetPressed)},onStartGamePressed:function(){if(e.gameReseted)e.setTimer(e.timeMin,e.timeSec),e.$contentArea.html(e.$templateGameScreen);else{var s=$("#play-time-form").serializeArray();console.log(s),console.log(s[0].value),console.log(s[1].value),e.timeMin=s[0].value,e.timeSec=s[1].value,e.setTimer(s[0].value,s[1].value),e.$contentArea.html(e.$templateGameScreen)}},onTimeFinished:function(){var s=e.wins,a=e.draws,t=e.losses,n=[e.wins,e.draws,e.losses];console.log(s+" "+a+" "+t),console.log(n);var o=Math.max.apply(Math,n);switch(console.log(o),o){case e.wins:e.winnerMessage("User Wins!!");break;case e.draws:e.winnerMessage("Its a Draw!!");break;case e.losses:e.winnerMessage("Computer Wins!!")}},winnerMessage:function(s){e.$contentArea.html(e.$templateWinnersScreen),$("#winners-text").text(s)},onUserRockSelected:function(){var s=e.onComputerChoise();switch(console.log(s),s){case 1:$(".player-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands1.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands6.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.draws=e.draws+1,$(".draw-score h4").text(e.draws);break;case 2:$(".player-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands1.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".player-choice").animate({"margin-left":0}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands4.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.losses=e.losses+1,$(".loss-score h4").text(e.losses);break;case 3:$(".player-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands1.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".player-choice").animate({"margin-left":0}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands2.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.wins=e.wins+1,$(".win-score h4").text(e.wins)}},onUserPaperSelected:function(){var s=e.onComputerChoise();switch(console.log(s),s){case 1:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands5.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands6.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.wins=e.wins+1,$(".win-score h4").text(e.wins);break;case 2:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands5.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands4.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.draws=e.draws+1,$(".draw-score h4").text(e.draws);break;case 3:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands5.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands2.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.losses=e.losses+1,$(".loss-score h4").text(e.losses)}},onUserScissorsSelected:function(){var s=e.onComputerChoise();switch(console.log(s),s){case 1:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands3.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"158px",height:"100px",background:'url("./assets/images/hands/hands6.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.losses=e.losses+1,$(".loss-score h4").text(e.losses);break;case 2:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands3.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands4.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.wins=e.wins+1,$(".win-score h4").text(e.wins);break;case 3:$(".player-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands3.png")',"background-repeat":"no-repeat","background-size":"cover","float":"left"}),$(".computer-choice").css({width:"226px",height:"100px",background:'url("./assets/images/hands/hands2.png")',"background-repeat":"no-repeat","background-size":"cover","float":"right"}),e.draws=e.draws+1,$(".draw-score h4").text(e.draws)}},setTimer:function(s,a){function t(s,a){function n(){var s=r;o--,10===o&&0===r&&alert("hurry up! Time's Almost Up"),$("#timer").text(s.toString()+":"+(10>o?"0":"")+String(o)),o>0?setTimeout(n,1e3):(s=r-1,r>1?t(r-1,60):1>o&&1>r?e.onTimeFinished():t(0,60))}var o=a,r=s;n()}t(s,a)},onComputerChoise:function(){return computerChoice=Math.floor(3*Math.random()+1),computerChoice},onGameResetPressed:function(){e.gameReseted=!0,e.wins=0,e.draws=0,e.losses=0,e.onStartGamePressed()}};e.init()});