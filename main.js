video = "";
status1 = "";
input = "";
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
    od = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("status");
}
function modelloaded()
{
    console.log("modelloaded!")
    status1 = true;
}
function draw()
{
    image(video, 0, 0, 380, 380);
}