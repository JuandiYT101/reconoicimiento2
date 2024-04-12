function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HkqXT1SkE/',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
    console.error(error)
    
} else{
    console.log(results)
    ramdom_number_r = Math.floor(Math.ramdom() * 255)+1 ;
    ramdom_number_g = Math.floor(Math.ramdom() * 255)+1 ;
    ramdom_number_b = Math.floor(Math.ramdom() * 255)+1 ;

    document.getElementById("result_label").innerHTML='Escucho - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML='Precision - ' + (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+ ","+random_number_b +")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+ ","+random_number_b +")";

img = document.getElementById('perro')
img1 = document.getElementById('gato')


if (results[0].label == "ladrido"){
    img.src = 'perro.png';
}
else if (results[0].label == "maullido"){
    img1.src = 'aliens-02.png';

}
}
}