//script for index
let enter = document.querySelector("button");
let dullimage = document.querySelector(".dullpfp");

enter.onclick=function(){
    console.log("test")
    dullimage.style.opacity= "1"
    dullimage.style.boxShadow= "0 0 30px goldenrod"
    dullimage.style.borderStyle = "groove"
    dullimage.style.borderWidth = "3px"
    dullimage.style.borderColor = "goldenrod"
    setTimeout(callBack_func, 3000);

}
function callBack_func() {
    window.location.href = "character.html";
}