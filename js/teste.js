
let answear = document.getElementsByClassName("quizz");
let showNumber = document.getElementsByTagName("h2")[0];
let navbarHide = document.getElementById('nav-hide');
let navbar = document.querySelector('.navbar');
let dropDown = document.getElementById("dropdown-ctn");
let caret = document.getElementsByTagName("i")[0];

let closUre = (function() {
  let nr = 2; 
  return  function() {
//showing corect/incorect answears  
      for(let a=0;a<answear.length;a++){    
        answear[a].addEventListener("click", function() {
            if(this.getAttribute("data-answear") === "correct") {
                answear[a].innerHTML = "CORECT";    
            }else{
                answear[a].innerHTML = "INCORECT";
      }
//hide/show the parent/nextSibling container after clicking any child elements 
        function hideShow(){
            answear[a].parentNode.style.display = "none";
            answear[a].parentNode.nextElementSibling.style.display = "block";
        }
        setTimeout(hideShow,500);
//showing the final element at the end of test
        if( answear[a].parentNode.className === "last"){
          function lastElm() {
            document.getElementById("finalText").style.display = "block";
            showNumber.style.display = "none";
      }
          setTimeout(lastElm,500);
  }
//show the next question number
        function showNr() {
          showNumber.innerHTML = "Întrebarea numărul "  + nr++  + " din 10.";
  }
        setTimeout(showNr,500);
      })
    }
   }
})();
closUre();
  
//menu button for small devices
function showNavbar() {
  navbar.classList.toggle("responsive");
}

//show dropdown content in navigation bar
function showDropdownCtn() {
  if(dropDown.style.display === "block"){
    dropDown.style.display = "none";
    caret.className = "fa fa-caret-down";
  }else{
    dropDown.style.display = "block";
    caret.className = "fa fa-caret-up";
  }
} 
      
  










