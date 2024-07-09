alert("You are entering an untrusted website.");

function showPhoto(){
    var image = document.getElementById("myPhoto");

    if (!image.src.includes("deanniee%20.JPG")){
        image.src = "deanniee%20.JPG";
    }
    else {
        image.src = "sensitive content.jpg";
    }
}