var typed = new Typed(".text",{
    strings :["Coder","Frontend Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
  

// window.addEventListener('load', function() {
//     // Get the loading screen element
//     var loadingScreen = document.getElementById('loading-screen');
  
//     // Remove the loading screen after a delay (e.g., 2 seconds)
//     setTimeout(function() {
//       loadingScreen.style.display = 'none';
//     }, 2000);
//   });
  

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
