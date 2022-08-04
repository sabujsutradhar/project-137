status = "";
object = [];

function preload()
{
    video = createVideo('https://vimeo.com/736131557');
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetrctor = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : detecting Objects";
}

function modelloaded()
{
    console.log("model Loaded")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }
    console.log(result);
    object = results;
}

function deaw()
{
    image(video, 0 , 0, 480, 380);
    if(status != "");
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detectedare : "+ objects.length;

            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].lebel + " " + precent + "%", objects[i].x +15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].height);
        }
    }
}