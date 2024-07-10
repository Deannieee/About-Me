alert("You are entering an untrusted website.");
alert("Just kidding. You can proceed XD");


//function for showing photo.
function showPhoto(){
    var image = document.getElementById("myPhoto");

    if (!image.src.includes("deanniee%20.JPG")){
        image.src = "deanniee%20.JPG";
    }
    else {
        image.src = "sensitive content.jpg";
    }
}

//functions for sidebars.
let isNavOpen = false;
function toggleNav(){
    if (isNavOpen){
        closeNav();
    } else{
        openNav();
    }
    isNavOpen = !isNavOpen;
}
function openNav(){
    document.getElementById("menuIcon").style.transition = "1.2s";
    document.getElementById("menuIcon").style.transform = "rotate(90deg)";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("head").style.marginLeft = "280px";
}

function closeNav(){
    document.getElementById("menuIcon").style.transition = "all 1.2s";
    document.getElementById("menuIcon").style.transform = "rotate(0deg)";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("head").style.marginLeft = "0px";   
}

//Function for life with music
function musicianFunction(imgs){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}