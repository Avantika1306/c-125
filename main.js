noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;



function preload(){
    
}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(650,150);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    background("white");
    fill("#87d5ed"); 
    stroke("#000000");
    square(noseX,noseY,difference);
    textSize(difference);
    fill("#e86b6b");
    text("Avantika",50,400);
    document.getElementById("font_size").innerHTML="text size will be"+difference+"px";

    
}

function modelLoaded(){
    console.log("poseNet is innitialised");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    

    }
}