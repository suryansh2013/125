noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is Initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " +leftWristX + " rightWristX = " + rightWristX + " Difference = " + difference);
    }
}
function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of the Square is " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}