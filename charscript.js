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

// menu
let charList = document.querySelector(".charicons");
let bio = document.querySelector(".profile");
let bioMenu = document.querySelector(".huowu");
let proj = document.querySelector(".project");
let projMenu = document.querySelector(".diaochan");

// take back to characters menu
let charButton = document.querySelector(".char");

charButton.onclick = function(){
  charList.style.display="flex";
  bioMenu.style.display="none";
}

//specific to huowu
let basicImg = document.querySelector(".basic");
let extrac = document.querySelector(".extra");
let why = document.querySelector(".code");

bio.onclick = function(){
  charList.style.display= "none";
  bio.style.opacity= "30%";
  proj.style.opacity= "100%";
  bioMenu.style.display= "flex";
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
  document.getElementById("change").src = "menu/huowu.webp";
  projMenu.style.display= "none";
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
let over = document.querySelector(".overview"); 
let u2 = document.querySelector(".unit2");
let u3 = document.querySelector(".unit3");
let u5 = document.querySelector(".unit5");
let pe = document.querySelector(".pepe");
let ani = document.querySelector("magic");

proj.onclick = function(){
  charList.style.display= "none";
  proj.style.opacity= "30%";
  bio.style.opacity= "100%";
  projMenu.style.display= "flex";
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "100%";
  //Not working!!!!!
  document.getElementById("change").src = "menu/diaochan.webp";
  bioMenu.stye.display= "none";
}
over.onclick = function(){
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "100%";
}
u2.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "30%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "100%";
}
u3.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "30%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "100%";
}
u5.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "30%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "100%";
}
pe.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "30%";
  animate.stye.opacity= "100%";
}
//not working!!!!!
ani.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  ani.stye.opacity= "30%";
}