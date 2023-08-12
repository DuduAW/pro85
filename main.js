
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");


greencarWidth=100;
greencarHeight=90;



greencarX=10;
greencarY=10;



function add() {
	
	backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;

}


function uploadBackground() {

		ctx.drawImage(backgroundImgTag,0,0, canvas.width, canvas.height);
	}
	
	
	backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";
	


function uploadGreenCar() {

		ctx.drawImage(roverImgTag,roverX,roverY, greencarWidth, greencarHeight);
	}
	



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
        {
            if(roverY >=0)
            {
                roverY=roverY - 10;
                console.log("quando a seta para cima e pressionada, x=" + roverX + " | y ="+roverY);
                uploadBackground();
                uploadrover();
            }
        }
        
        
        function down()
        {
            if(roverY >=500)
            {
                roverY = + 10;
                console.log("quando a seta para baixo e pressionada, x=" + roverX + " | y ="+roverY);
                uploadBackground();
                uploadrover();
            }
        }
        
        
        function left()
        {
            if(roverY >=0)
            {
                roverY = roverX - 10;
                console.log("quando a seta para esquerda e pressionada, x=" + roverX + " | y ="+roverY);
                uploadBackground();
                uploadrover();
            }
        }
        
        function right()
        {
            if(roverX >=700)
            {
                roverX = roverX + 10;
                console.log("quando a seta para direita e pressionada, x=" + roverX + " | y ="+roverY);
                uploadBackground();
                uploadrover();
            }
        }
        
        
        
    



function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadGreenCar;
    roverImgTag.src = greencarImage;

}



























