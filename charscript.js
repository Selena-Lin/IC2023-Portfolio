let openButton = document.querySelector(".open")
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