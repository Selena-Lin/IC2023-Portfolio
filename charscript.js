let openButton = document.querySelector(".open");
let closeButton = document.querySelector(".close");

/* Open when someone clicks on the span element */
openButton.onclick=function(){
    document.getElementById("myNav").style.width = "80%";
    openButton.style.display="none";
    closeButton.style.display= "block";
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
closeButton.onclick = function(){
    document.getElementById("myNav").style.width = "20%";
    openButton.style.display="block";
    closeButton.style.display= "none";
}

// variables for menu and img on right side
let charSelect = document.querySelector(".me");
let charList = document.querySelector(".charicons");

// take back to characters menu
let charButton = document.querySelector(".char");

charButton.onclick = function(){
  charList.style.display="flex";
  bioMenu.style.display="none";
}

//specific to huowu
let bio = document.querySelector(".profile");
let bioMenu = document.querySelector(".huowu");
let basicImg = document.querySelector(".basic");
let extrac = document.querySelector(".extra");
let why = document.querySelector(".code");

bio.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "flex";
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
}
basicImg.onclick = function(){
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
}
extrac.onclick = function(){
  basicImg.style.opacity= "100%";
  extrac.style.opacity= "30%";
  why.style.opacity= "100%";
}
why.onclick = function(){
  basicImg.style.opacity= "100%";
  extrac.style.opacity= "100%";
  why.style.opacity= "30%";
}

//diaochan
