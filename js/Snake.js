function Snake(positionDepart){

	this.headSnakePos = new Tuple(positionDepart.x,positionDepart.y);;
	this.sizeSnake = 6;
	this.speed = 50;
	this.isCanMove = true;
	
	this.lastTimeMove = new Date().getTime();
	
	this.directionSnake = 1;
	this.positions = [];

	let headPos = new Tuple(this.headSnakePos.x, this.headSnakePos.y);
	this.positions.push(headPos);

	this.draw = function(windowGame){
		for (var i = 0; i < this.positions.length; i++) {
			windowGame.ctx.fillStyle = "DarkGray";
			windowGame.ctx.fillRect(this.positions[i].x * windowGame.sizeOfTile, this.positions[i].y * windowGame.sizeOfTile, windowGame.sizeOfTile, windowGame.sizeOfTile);
		}
	}

	this.changerDirection = function(dir){
		if (this.isCanMove){
			this.isCanMove = false;
			this.directionSnake = dir;
		}
	}

	this.moveInterne = function(){
		
		if (this.lastTimeMove <= new Date().getTime() ) {
			switch(this.directionSnake){
				case 4:
					this.headSnakePos.ChangeData(this.headSnakePos.x,(this.headSnakePos.y+1)%20);
					this.positions.push(new Tuple(this.headSnakePos.x,this.headSnakePos.y));
					break;
				case 3:
					if(this.headSnakePos.y-1<0){
						this.headSnakePos.ChangeData(this.headSnakePos.x,19);
					}else{
						this.headSnakePos.ChangeData(this.headSnakePos.x,Math.abs(this.headSnakePos.y-1)%20);
					}
					this.positions.push(new Tuple(this.headSnakePos.x,this.headSnakePos.y));
					break;
				case 2:
					if(this.headSnakePos.x-1<0){
						this.headSnakePos.ChangeData(19,this.headSnakePos.y);
					}else{
						this.headSnakePos.ChangeData(Math.abs(this.headSnakePos.x-1)%20,this.headSnakePos.y);
					} 
					this.positions.push(new Tuple(this.headSnakePos.x,this.headSnakePos.y));

					break;
				case 1:
					this.headSnakePos.ChangeData(Math.abs(this.headSnakePos.x+1)%20,this.headSnakePos.y);
					this.positions.push(new Tuple(this.headSnakePos.x,this.headSnakePos.y));
					break;
			}

			this.isCanMove = true;
			
			var t = new Date();
			t.setMilliseconds(t.getMilliseconds() + this.speed)
			this.lastTimeMove = t.getTime();
			
		}
	}

	this.deleteTail = function(){
		cmpt = this.sizeSnake;
		for(i = this.positions.length-1; i>=0; i--){
			if(cmpt==0){
				t = this.positions[i];
			}else{
				cmpt--;
			}
		}

		cmpt = this.sizeSnake;
		for(i = this.positions.length-1;i>=0;i--){
			if(cmpt==0){
				this.positions.splice(i, 1);
			}else{
				cmpt--;
			}
		}
	}

}