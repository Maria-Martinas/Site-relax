let navbarHide = document.getElementById('nav-hide');
let navbar = document.querySelector('.navbar');
let dropDown = document.getElementById("dropdown-ctn");
let caret = document.getElementsByTagName("i")[0];

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