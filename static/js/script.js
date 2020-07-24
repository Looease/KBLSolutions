
//Nav Scroll//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 185 || document.documentElement.scrollTop > 185) {
document.getElementById("navbar").style.padding = "20px 0px 0px 0px";
document.getElementById("navbar").style.background="rgba(255,255,255,0.9)";
// rgba(246, 192, 178, 0.6)

} else {
document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
document.getElementById("navbar").style.background="transparent";
}
}

//Close Nav//

function closeNav() {
  event.stopPropagation()

  var x = document.getElementById("navLink");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
