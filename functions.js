function myFunction() {
  var x = document.getElementById("links");
  var windowWidth = window.innerWidth;
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
  
}
function atualizarMenu()
{
  var x = document.getElementById("links");
  var windowWidth = window.innerWidth;
  if(x.style.display == "none" && windowWidth > 769){
    x.style.display = "block"
  }
} 

window.addEventListener("resize", atualizarMenu);

