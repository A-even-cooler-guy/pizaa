img="";
status="";
objects=[];
function preload(){
    img=loadImage("person_portrait.jpg");
    
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status -STOP! wait a minute";

}

function modelLoaded(){
    console.log("model has laoaded.oops wrong spelling...");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);  
    objects=results;

}

function draw(){
    image(img,0,0,600,500);

    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status - FINITO"
            fill("#0F40B1");
            textSize(20);
            confidence=floor(100*objects[i].confidence);
            //confidence=floor(Math.random(60,100)*100); hehe this is funny. Saving for future me
            text(objects[i].label+" "+confidence+"% ",objects[i].x,objects[i].y);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
   
}

function homeTime(){
    window.location="index.html";
}