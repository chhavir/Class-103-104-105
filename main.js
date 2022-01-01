Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("cam");

Webcam.attach("cam");

function capture_snapshot()
{
    console.log("Taking the picture");
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "data_img" src ="'+data_uri+'"/> ';
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eboelnRho/model.json",modelLoaded);

function modelLoaded()
{
    
}

function check()
{
    img= document.getElementById("data_img");
    classifier.classify(img, gotResult);

}

function gotResult(errors, results)
{
    if(errors){
        console.error(errors);
    }
    else {
        console.log(results);
        document.getElementById("resultName").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}