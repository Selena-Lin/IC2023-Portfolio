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
let sou = document.querySelector(".sources");
let souMenu = document.querySelector(".anqila");
//center content for skins
let basicContent = document.querySelector(".biography");
let extraContent = document.querySelector(".extracurricular");
let whyContent = document.querySelector(".porque");
let overContent = document.querySelector(".ov");
let u2Content = document.querySelector(".proj2");
let u3Content = document.querySelector(".proj3");
let u5Content = document.querySelector(".proj5");
let peContent = document.querySelector(".pep");
let animateContent = document.querySelector(".show");
let conContent = document.querySelector(".ovc");
let emContent = document.querySelector(".e");
let instaContent = document.querySelector(".ig");
let souContent = document.querySelector(".citation");

// take back to characters menu
let charButton = document.querySelector(".char");

charButton.onclick = function(){
  charList.style.display= "flex";
  bioMenu.style.display= "none";
  projMenu.style.display= "none";
  conMenu.style.display= "none";
  souMenu.style.display= "none";
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
  souMenu.style.display= "none";
  bio.style.opacity= "30%";
  proj.style.opacity= "100%";
  con.style.opacity= "100%";
  sou.style.opacity= "100%";
  //skins
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
  //change image
  document.getElementById("change").src = "menu/huowu.webp";
  //middle content
  basicContent.style.display= "block";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
basicImg.onclick = function(){
  basicImg.style.opacity= "30%";
  extrac.style.opacity= "100%";
  why.style.opacity= "100%";
  //middle content
  basicContent.style.display= "block";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
extrac.onclick = function(){
  basicImg.style.opacity= "100%";
  extrac.style.opacity= "30%";
  why.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "block";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
why.onclick = function(){
  basicImg.style.opacity= "100%";
  extrac.style.opacity= "100%";
  why.style.opacity= "30%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "block";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
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
  souMenu.style.display= "none";
  bio.style.opacity= "100%";
  proj.style.opacity= "30%";
  con.style.opacity= "100%";
  sou.style.opacity= "100%";
  //skins
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //change img
  document.getElementById("change").src = "menu/diaochan.webp";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "block";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
over.onclick = function(){
  over.style.opacity= "30%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "block";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
u2.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "30%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "block";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
u3.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "30%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "block";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
u5.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "30%";
  pe.style.opacity= "100%";
  animate.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "block";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
pe.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "30%";
  animate.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "block";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
animate.onclick = function(){
  over.style.opacity= "100%";
  u2.style.opacity= "100%";
  u3.style.opacity= "100%";
  u5.style.opacity= "100%";
  pe.style.opacity= "100%";
  animate.style.opacity= "30%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "block";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}

// shangguan
let conButton = document.querySelector(".contacts");
let em = document.querySelector(".email");
let insta = document.querySelector(".ins");

con.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "none";
  projMenu.style.display= "none";
  conMenu.style.display= "flex";
  souMenu.style.display= "none";
  bio.style.opacity= "100%";
  proj.style.opacity= "100%";
  con.style.opacity= "30%";
  sou.style.opacity= "100%";
  //skins
  conButton.style.opacity= "30%";
  em.style.opacity= "100%";
  insta.style.opacity= "100%";
  //change image
  document.getElementById("change").src= "menu/shangguan.webp";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "block";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
conButton.onclick = function(){
  conButton.style.opacity= "30%";
  em.style.opacity= "100%";
  insta.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "block";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
em.onclick= function(){
  conButton.style.opacity= "100%";
  em.style.opacity= "30%";
  insta.style.opacity= "100%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "block";
  instaContent.style.display= "none";
  souContent.style.display= "none";
}
insta.onclick = function(){
  conButton.style.opacity= "100%";
  em.style.opacity= "100%";
  insta.style.opacity= "30%";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "block";
  souContent.style.display= "none";
}

//sources
let souList = document.querySelector(".source");

sou.onclick = function(){
  charList.style.display= "none";
  bioMenu.style.display= "none";
  projMenu.style.display= "none";
  conMenu.style.display= "none";
  souMenu.style.display= "flex";
  bio.style.opacity= "100%";
  proj.style.opacity= "100%";
  con.style.opacity= "100%";
  sou.style.opacity= "30%";
  //skins
  souList.style.opacity= "30%";
  //change image
  document.getElementById("change").src= "menu/anqila.webp";
  //middle content
  basicContent.style.display= "none";
  extraContent.style.display= "none";
  whyContent.style.display= "none";
  overContent.style.display= "none";
  u2Content.style.display= "none";
  u3Content.style.display= "none";
  u5Content.style.display= "none";
  peContent.style.display= "none";
  animateContent.style.display= "none";
  conContent.style.display= "none";
  emContent.style.display= "none";
  instaContent.style.display= "none";
  souContent.style.display= "block";
}