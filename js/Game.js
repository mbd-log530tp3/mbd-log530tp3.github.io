function Game(windowGame, numberOfTile) {

	this.status = true;
	this.windowGame = windowGame;
	this.numberOfTile = numberOfTile


	document.getElementById("buttonRestart").onclick = function(){ 
		this.restartGame();
	}.bind(this);
	
	this.initGame = function(){
		var positionDepart = new Tuple(10,10);

		snake = new Snake(positionDepart);
		
		var foodPosition = new Tuple(this.numberOfTile-1,this.numberOfTile-1);
		
		food = new Food(foodPosition)
		
		this.snake = snake;
		this.food = food;
		
	}
	
	this.start = function(){
		this.loopGame(); 
	}
	
	this.loopGame =function(){
		
		if (this.status){
	
			this.snake.moveInterne();
			this.checkCollision();
			this.snake.deleteTail();
				
			this.snake.draw(this.windowGame);
			this.food.draw(this.windowGame);
			
			this.windowGame.draw();
		} else {
			this.initGame();
		}
		requestAnimationFrame(this.loopGame.bind(this));
	}
	
	this.stopTheGame = function(){
		console.log("COLISION!");
		this.status = false;
		document.getElementById("buttonRestart").classList.remove("hidden")
	}

	this.restartGame = function(){
        document.getElementById("buttonRestart").classList.add("hidden");
        this.status = true;
	};

	this.checkCollision = function() {
		
		posCritique = this.snake.positions[this.snake.positions.length - 1];
		for(i = 0; i <= this.snake.positions.length - 2; i++){
			biteItself = (posCritique.x == this.snake.positions[i].x && posCritique.y == this.snake.positions[i].y);
			if(biteItself){
				this.stopTheGame();
			}
		}
		
		eatingFood = (posCritique.y == this.food.position.y && posCritique.x == this.food.position.x);
		if(eatingFood){
			console.log("Yummy!");
			this.snake.sizeSnake = this.snake.sizeSnake + 1;
			this.food.getValAleaNotInSnake(this.snake);	
		}
	}

}