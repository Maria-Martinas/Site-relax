let goToTop = document.getElementById('toTop');
let navbarHide = document.getElementById('nav-hide');
let navbar = document.querySelector('.navbar');
let dropDown = document.getElementById("dropdown-ctn");
let caret = document.getElementsByTagName("i")[0];

//gradually change the background color of paragraphs
window.addEventListener("scroll",function(){
    let off = document.getElementsByTagName("p");
    let cul = ["rgb(143, 210, 228)","transparent"];
    let c = cul.concat(cul,cul,cul,cul,cul,cul,cul,cul);
    for(let a=0;a<off.length;a++){
        let r = off[a].getBoundingClientRect();
    if(r.top<430){
        off[a].style.transition = "all 1.3s";
        off[a].style.backgroundColor=c[a];
    }else{
        off[a].style.backgroundColor="";  
    }
}})

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