
let navbarHide = document.getElementById('nav-hide');
let navbar = document.querySelector('.navbar');
let y = navbarHide.innerHTML;
let dropDown = document.getElementById("dropdown-ctn");
let caret = document.getElementsByTagName("i")[0];
let country;
let countriesList = document.getElementById("countries");
let image = document.querySelector("aside img");
let asideSection = document.getElementsByTagName("aside")[0];

//displays some hidden content
function showDetails(event) { 
    document.getElementsByClassName("detail")[0].style.display = "inline";
    document.getElementById('disp-none').style.display = "none";
    event.target.style.display = "none";
}
function showAnswear(event) {
  document.getElementsByClassName("detail")[1].style.display = "inline";
  event.target.style.display = "none";
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

//menu button for small devices
function showNavbar() {
  navbar.classList.toggle("responsive");
}

//fetching and displaying countries data using Restcountries API
fetch('https://restcountries.com/v2/all')
	.then(response => response.json())
  .then(data => {initialize(data)
    console.log(data);
  })
  .catch(error => alert(error))

//the options for the select element with the countries name
function initialize(countriesData) {
    let options = "";
    country = countriesData;
    country.forEach(country => {
    options += `<option value="${country.alpha3Code}">${country.name}</option>`;
});
//randomly displays a country's data
document.getElementById("countries").innerHTML = options;
countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}
 
//displays data at user select	
function displayCountryInfo(countryAlpha){
    const countryData = country.find(country => country.alpha3Code === countryAlpha);
    image.src = `${countryData.flag}`;
    image.alt = `${countryData.name}'s flag`;
    document.getElementById("country").innerHTML = countryData.name;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("language").innerHTML = countryData.languages[0].name;
    document.getElementById("code").innerHTML =`+ ${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString();
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.getElementById("map").innerHTML = `${countryData.currencies[0].name}, ${countryData.currencies[0].symbol} `;
    }
    countriesList.addEventListener("change",function(event){
      displayCountryInfo(event.target.value);
    })

//responsive at window resize     
window.onresize = function(){
    if(asideSection.style.position === "fixed"){
      asideSection.style.position = "absolute";
    }
  }