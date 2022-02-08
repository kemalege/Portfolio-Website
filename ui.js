function openFunction(){
    
    document.getElementById("mainbox").addEventListener("mouseenter",logkey);
   }
  function closeFunction(){
   
    document.getElementById("menu").addEventListener("mouseleave",logkey2);
  }
  function contacting(){
   
    
  }
  function closecontacting(){
   
    
  }
  // function openOffice(){
    
  //   document.getElementById("bottommenu").addEventListener("mouseenter",logkey3);
  //  }
  // function closeOffice(){
   
  //   document.getElementById("bottommenu").addEventListener("mouseleave",logkey4);
  // }
  
  function logkey(){
    document.getElementById("menu").style.height="40px"; 
    document.getElementById("mainbox").innerHTML="&#9776; Menu";
    document.getElementById("mainbox").style.color="white";
    
  }
  function logkey2(){
    document.getElementById("menu").style.height="0px";
    document.getElementById("mainbox").innerHTML="&#9776; Open";
    document.getElementById("mainbox").style.color="#999";
    
  }
  function logkey3(){

  }
  function logkey4(){

  }
  // function logkey4(){
    
  //   document.getElementById("bottommenu").style.height="0px";
    
    
  // }
  window.onscroll = function() {myFunction()};

// Get the navbar
const mainbox = document.getElementById("mainbox");
const menu = document.getElementById("menu");

// Get the offset position of the navbar
const sticky = mainbox.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    mainbox.classList.add("sticky")
    menu.classList.add("sticky2")
  } else {
    mainbox.classList.remove("sticky");
    menu.classList.remove("sticky2")
  }
}