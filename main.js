canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_images_array=["nasa img 1.jpg","nasa img 2.jpg","nasa img 3.jpg","nasa img 4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);


rover_width=100;
rover_height=90;
background_image= nasa_images_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add()
{
 background_imgTag=new Image();
 background_imgTag.onload=uploadBackground;
 background_imgTag.src=background_image;  

 rover_imgTag=new Image();
 rover_imgTag.onload=uploadRover;
 rover_imgTag.src=rover_image;
}


function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='65')
    {
        left();
        console.log("a");
    }

    if(keyPressed=='68')
    {
        right();
        console.log("d");
    }

    if(keyPressed=='87')
    {
        up();
        console.log("w");
    }

    if(keyPressed=='83')
    {
        down();
        console.log("s");
    }
}

function up()
{
    if (rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if (rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if (rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if (rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
    }
}


