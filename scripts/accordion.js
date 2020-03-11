var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    toggleAccordion(this);
  });
  if(acc[i].dataset.default === "open") toggleAccordion(acc[i]);
}

function toggleAccordion(elmnt){
  elmnt.classList.toggle("active");
  var panel = elmnt.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}

// Scroll to Top when clicking on the top left name
document.getElementById("header-area-name").addEventListener("click", function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
