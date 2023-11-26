let main = document.getElementById("main");
let showResult = main.getElementsByTagName("button");
let hideResult = document.getElementsByTagName("span");
let navbarHide = document.getElementById('nav-hide');
let navbar = document.querySelector('.navbar');
let dropDown = document.getElementById("dropdown-ctn");
let caret = document.getElementsByTagName("i")[0];
let goToTop = document.getElementById('toTop');

//show hidden content
for(let a=0;a<showResult.length;a++){
  showResult[a].addEventListener("click", function(){
  hideResult[a].style.display = "inline";
  this.outerHTML = "";
  })
}

//menu button for small devices
function showNavbar() {
  navbar.classList.toggle("responsive");
}

//show dropdown content in the header
function showDropdownCtn() {
  if(dropDown.style.display === "block"){
    dropDown.style.display = "none";
    caret.className = "fa fa-caret-down";
  }else{
    dropDown.style.display = "block";
    caret.className = "fa fa-caret-up";
  }
}

//button element to go to top
window.onscroll = function(){toTop()};

function toTop() {
if(document.documentElement.scrollTop>400){
    goToTop.style.display = "block";
}else
{
    goToTop.style.display = "none";
}}
goToTop.addEventListener("click", function(){
    document.documentElement.scrollTop=0;
})
