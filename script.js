function myfunction(){
    let x = document.querySelector(".wrapper");
    x.style.display = "block";
}
function close_func(){
    let close = document.querySelector(".wrapper");
    close.style.display = "none";

}

// +++++++++++++++++++++++navbar active+++++++++++++++
var btnContainer = document.getElementById("header");
var btns = btnContainer.getElementsByClassName("nav_a");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
  
//       // If there's no active class
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
  
//       // Add the active class to the current/clicked button
//       this.className += " active";
//     });
//   }
