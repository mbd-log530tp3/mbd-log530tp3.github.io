function Window(numberOfTile) {
	
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var size = h;
	
	if (w < h)
		size = w;

	this.sizeOfTile = Math.floor(size / 20);
	this.widthAndHeight = numberOfTile * this.sizeOfTile;

	this.canvas = document.getElementById('canvas');
	this.canvas.width = this.widthAndHeight;
	this.canvas.height = this.widthAndHeight;
	
	this.canvas.getContext('2d').beginPath();

	this.bufferingCanvas = document.createElement('canvas');
	this.bufferingCanvas.width = this.widthAndHeight;
	this.bufferingCanvas.height = this.widthAndHeight;
	this.ctx = this.bufferingCanvas.getContext('2d');
	this.ctx.beginPath();

	this.draw = function(){
	
		this.canvas.getContext('2d').clearRect(0, 0, this.widthAndHeight, this.widthAndHeight);
		this.canvas.getContext('2d').drawImage(this.bufferingCanvas, 0, 0);

		this.ctx.clearRect(0, 0, this.widthAndHeight, this.widthAndHeight);
		this.ctx.beginPath();
	}
	
	window.onresize = function(event) {
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var size = h;
		
		if (w < h)
			size = w;
		
		this.sizeOfTile = Math.floor(size / 20);
		this.widthAndHeight = numberOfTile * this.sizeOfTile;

		this.canvas.width = this.widthAndHeight;
		this.canvas.height = this.widthAndHeight;

		this.bufferingCanvas.width = this.widthAndHeight;
		this.bufferingCanvas.height = this.widthAndHeight;

	}.bind(this)
	
}