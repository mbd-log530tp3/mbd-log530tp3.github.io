function Food(position) {

	this.position = new Tuple(position.x,position.y);

	this.getValAleaNotInSnake = function(snake){
		ranX = Math.round(0 + Math.random() * 19); 
		ranY = Math.round(0 + Math.random() * 19); 
		p = new Tuple(ranX,ranY);
		for(i = 0;i <= snake.positions.length - 1; i++){
			 if(p.y == snake.positions[i].x && p.x == snake.positions[i].y){
				ranX = Math.round(0 + Math.random() * 19); 
				ranY = Math.round(0 + Math.random() * 19); 
				p = new Tuple(ranX,ranY);
				i = 0;
			 }
		}
		this.position = p;
	}

	this.draw = function(windowGame){
		windowGame.ctx.fillStyle = "Blue";
		windowGame.ctx.fillRect(this.position.x * windowGame.sizeOfTile, this.position.y * windowGame.sizeOfTile, windowGame.sizeOfTile, windowGame.sizeOfTile);
	}

}