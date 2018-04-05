function KeyboardListener(game) {
	
	document.onkeydown = function (e) {
		e = e || window.event;
		
		switch(event.keyCode){
			case 39:	// -> Right 
				//if it's not the opposite direction
				if(game.snake.directionSnake!=2) 
					game.snake.changerDirection(1);
				break;
			case 38:	// -> Top
				if(game.snake.directionSnake!=4) 
					game.snake.changerDirection(3);
				break;

			case 37: 	// -> Left 
				if(game.snake.directionSnake!=1)
					game.snake.changerDirection(2)
				break;

			case 40:	// -> Bottom
				if(game.snake.directionSnake!=3)
					game.snake.changerDirection(4);
				break;

			default: 
				break;
		}
	};

}