function TouchListener(game) {

    /*
    * Disable the click and mouse events since a touch event also trigger a click event and we don't want an event to launch twice.
    * */
    function disableDefaultBehaviour(e){
        e.preventDefault();
        e.stopImmediatePropagation();
    }
    document.addEventListener("click",disableDefaultBehaviour);
    document.addEventListener("mousedown",disableDefaultBehaviour);
    document.addEventListener("mouseenter",disableDefaultBehaviour);
    document.addEventListener("mouseleave",disableDefaultBehaviour);
    document.addEventListener("mousemove",disableDefaultBehaviour);
    document.addEventListener("mouseover",disableDefaultBehaviour);
    document.addEventListener("mouseout",disableDefaultBehaviour);
    document.addEventListener("mouseup",disableDefaultBehaviour);
    document.addEventListener("mousewheel",disableDefaultBehaviour);
    /*
    * Touch events we don't use but we want to prevent their default behaviour in case something happens.
    * */
    document.addEventListener("touchend", disableDefaultBehaviour);
    document.addEventListener("touchenter", disableDefaultBehaviour);
    document.addEventListener("touchleave", disableDefaultBehaviour);
    document.addEventListener("touchcancel", disableDefaultBehaviour);

    //Tuple of the last position registered by the user.
    var lastPos;

    /*
    * Touch start event
    * Set the initial coordinate the first time the user touch the screen.
    * */
    document.addEventListener("touchstart", function(e){
        e.preventDefault();
        var touch = e.changedTouches[0];
        lastPos = new Tuple(touch.clientX, touch.clientY);
    });

    /*
    * Touch move event
    * Compare the new touch position to the last position to dermine in which direction the user swiped.
    * */
    document.addEventListener("touchmove", function(e){
        e.preventDefault();
        var touch = e.changedTouches[0];
        var newPos = new Tuple(touch.clientX, touch.clientY);
        var distX = Math.abs(lastPos.x - newPos.x);
        var distY = Math.abs(lastPos.y - newPos.y);


        //If the distance on the X axis is greater than the distance on the Y axis we are moving horizontally, otherwise we are moving vertically.
        if(distX >= distY){
            //If the new X position is greater than the last one it means we are going right, otherwise we are going left.
            if(newPos.x >= lastPos.x){
                if(game.snake.directionSnake!=2){
                    game.snake.changerDirection(1);
                }
            }else{
                if(game.snake.directionSnake!=1){
                    game.snake.changerDirection(2);
                }
            }
        }else{
            //If the new Y position is greater than the last one, it means we are going downward, otherwise we are going upward.
            if(newPos.y >= lastPos.y){
                if(game.snake.directionSnake!=3){
                    game.snake.changerDirection(4);
                }
            }else{
                if(game.snake.directionSnake!=4){
                    game.snake.changerDirection(3);
                }
            }
        }
        

        //the newPos become the lastPos.
        lastPos = newPos;
    });

    /*
    * Touch listener pour le bouton de recommencement
    * */
    document.getElementById("buttonRestart").addEventListener("touchstart", function(e){
        game.restartGame();
    });

}