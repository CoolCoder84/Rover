canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var nasa_array=["nasa.jpg","nasa1.jpg","nasa2.jpg","nasa3.jpg"];
var random_number=Math.floor(Math.random()*4);


rover_width=100;
rover_height=90;

rover_X=10;
rover_Y=10;

background=nasa_array[random_number];
console.log("background image is "+background);
rover="rover.png";

function add(){
    background_image=new Image();
    background_image.onload=uploadBackground;
    background_image.src=background;

    rover_image=new Image();
    rover_image.onload=uploadRover;
    rover_image.src=rover;
}

function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_KeyDown);
function my_KeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");  
    }

    if(keyPressed=="39"){
        right();
        console.log("right");  
    }

    if(keyPressed=="40"){
        down();
        console.log("down");  
    }

    if(keyPressed=="37"){
        left();
        console.log("left");  
    }
}

function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("When up arrow is pressed, x= "+rover_X+" ,Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }  
}

function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("When down arrow is pressed, x= "+rover_X+" ,Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }  
}

function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        console.log("When left arrow is pressed, x= "+rover_X+" ,Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }  
}

function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        console.log("When right arrow is pressed, x= "+rover_X+" ,Y= "+rover_Y);
        uploadBackground();
        uploadRover();
    }  
}