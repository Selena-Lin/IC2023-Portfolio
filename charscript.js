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

// menu & buttons
let charList = document.querySelector(".charicons");
let bio = document.querySelector(".profile");
let bioMenu = document.querySelector(".huowu");
let proj = document.querySelector(".project");
let projMenu = document.querySelector(".diaochan");
let con = document.querySelector(".contact");
let conMenu = document.querySelector(".shangguan");

// take back to characters menu
let charButton = document.querySelector(".char");

charButton.onclick = function(){
  charList.style.display="flex";
  bioMenu.style.display="none";
  projMenu.style.display="none";
}

//specific to huowu
let basicImg = document.querySelector(".basic");
let extrac = document.querySelector(".extra");
let why = document.querySelector(".code");

bio.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "flex";
  projMenu.style.display= "none";
  conMenu.style.display= "none";
  bio.style.opacity= "30%";
  proj.style.opacity= "100%";
  con.style.opacity= "100%";
  //skins
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
  //change image
  document.getElementById("change").src = "menu/huowu.webp";
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
let animate = document.querySelector(".magic");

proj.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "none";
  projMenu.style.display= "flex";
  conMenu.style.display= "none";
  proj.style.opacity= "30%";
  bio.style.opacity= "100%";
  con.style.opacity= "100%";
  //skins
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //change img
  document.getElementById("change").src = "menu/diaochan.webp";

}
over.onclick = function(){
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
}
u2.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "30%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
}
u3.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "30%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
}
u5.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "30%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
}
pe.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "30%";
  animate.style.opacity= "100%";
}
animate.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "30%";
}

// shangguan
let conButton = document.querySelector(".contacts");
let em = document.querySelector(".email");

con.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "none";
  projMenu.style.display= "none";
  conMenu.style.display= "flex";
  bio.style.opacity= "100%";
  proj.style.opacity= "100%";
  con.style.opacity= "30%";
  //skins
  conButton.style.opacity= "30%";
  em.style.opacity= "100%";
  //change image
  document.getElementById("change").src= "menu/shangguan.webp";
}
conButton.onclick = function(){
  conButton.style.opacity= "30%";
  em.style.opacity= "100%";
}
em.onclick= function(){
  conButton.style.opacity= "100%";
  em.style.opacity= "30%";
}