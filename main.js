noseX = 0;
noseY = 0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/sXk4tPWQ/c3b3cd2c37a214bef29e3e21d5c55eb4.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200, 170);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose,noseX,noseY,40,40)
}

function take_snapshot() {
  save('myFilterImage.png');
}