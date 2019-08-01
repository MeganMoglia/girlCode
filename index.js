//Global Variables
//console.log(document.querySelector(".ten").checked)
var button = $(".submit");
var container = $(".container");
var body = $("body");
var light = $(".light");
var dark = $(".dark");
var bar = $(".bar");
var welcome = $(".welcome");
var aboutUs = $(".aboutUs");
var resources = $(".resources");
var clubsAndClasses = $(".clubsAndClasses");
var navigationBar = $(".navigation-bar");


dark.on("click", darkMode);

//Function Calls & Event Listeners
button.on("click", showPrograms);

//Function Declarations
function showPrograms (){
  if (document.querySelector(".ten").checked==true) {
    container.empty().append(`<div class = "alexaCafe">
      <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
      <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
      <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
    </div>`);
}
  if (document.querySelector(".eleven").checked==true) {
    container.empty().append(`<div class = "alexaCafe">
      <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
      <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
      <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
    </div>`);
}
    if (document.querySelector(".twelve").checked==true) {
      container.empty().append(`<div class = "alexaCafe">
        <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
        <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
        <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
      </div>`);
}
      if (document.querySelector(".thirteen").checked==true) {
        container.empty().append(`<div class = "alexaCafe">
          <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
          <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
          <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
        </div>`);
        container.append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
}

if (document.querySelector(".fourteen").checked==true) {
  container.empty().append(`<div class = "alexaCafe">
    <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
    <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
    <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
  </div>`);
  container.append(`<div class = "kwk">
      <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
      <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
      <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
    </div>`);
container.append(`  <div class = "gwc">
    <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
    <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
    <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
  </div>`);
}

if (document.querySelector(".fifteen").checked==true) {
  container.empty().append(`<div class = "alexaCafe">
    <img class = "images" src="alexacafe.png" alt="Alexa Cafe logo">
    <a class = "programLinks" href="https://www.idtech.com/alexa-cafe"> Alexa Cafe </a>
    <p> Alexa Cafe is a program that offers overnight and day classes for girls ages 10-15. They will learn to code, collaborate, and make new projects. </p>
  </div>`);
  container.append(`<div class = "kwk">
      <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
      <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
      <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
    </div>`);
container.append(`  <div class = "gwc">
    <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
    <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
    <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
  </div>`);
}




      if (document.querySelector(".sixteen").checked==true) {
        container.empty().append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
          container.append(`<div class = "gwc">
              <img class = "images" src="girlswhocode2.png" alt="Girls Who Code logo">
              <a class = "programLinks" href="https://girlswhocode.com/summer-immersion-programs/"> Girls Who Code </a>
              <p> Girls Who Code offers a FREE 7-week summer immersion program for 10th and 11th grade girls. Girls will learn about computer science, join a sisterhood, and gain exposure to high tech jobs.   </p>
            </div>`);

}

      if (document.querySelector(".seventeen").checked==true) {
        container.empty().append(`<div class = "kwk">
            <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
            <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
            <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
          </div>`);
}

    if (document.querySelector(".eighteen").checked==true) {
      container.empty().append(`<div class = "kwk">
          <img class = "images" src="kodewithklossy.jpg" alt="Kode with Klossy logo">
          <a class = "programLinks" href="https://www.kodewithklossy.com/program"> Kode With Klossy </a>
          <p> Kode with Klossy is a FREE code camp for girls!!! Girls from ages 13-18 will spend two wonderful weeks learning to code. Beginner or advanced, everyone is welcome!! </p>
        </div>`);
  }

}
// dark and light modes


function darkMode(){
  console.log("dark mode activated");
  welcome.css("background-color", "black");
  bar.css("background-color", "black");
  aboutUs.css("background-color", "black");
  resources.css("background-color", "black");
  clubsAndClasses.css("background-color","black");
  navigationBar.css("background-color", "black");
}
