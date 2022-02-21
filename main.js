function buttonIndex()
{
    window.location.replace("http://www.w3schools.com");
}

function startClassification()
{
    
    navigator.mediaDevices.getUserMedia({ audio: true});
    alert('before soundClassifier');
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbKCkote1/model.json', modelReady);
    alert('after soundClassifier');
}

function modelReady(){
    alert('modelReady');
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }   else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('cow');

        if (results[0].label == "Barking") {
            img.src = 'dog.jpg';
            img1.src = 'dog.jpg';
            img2.src = 'dog.jpg';
            img3.src = 'dog.jpg';
        }   else if (results[0].label == "Meowing") {
            img.src = 'cat.jpg';
            img1.src = 'cat.jpg';
            img2.src = 'cat.jpg';
            img3.src = 'cat.jpg';
        }   else if (results[0].label == "Roaring") {
            img.src = 'lion.jpg';
            img1.src = 'lion.jpg';
            img2.src = 'lion.jpg';
            img3.src = 'lion.jpg';
        }else{
            img.src = 'cow.jpg';
            img1.src = 'cow.jpg';
            img2.src = 'cow.jpg';
            img3.src = 'cow.jpg';
        }
    }
}