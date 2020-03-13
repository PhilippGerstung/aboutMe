

function toggleAccordion(elmnt){
  elmnt.classList.toggle("active");
  var panel = elmnt.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = "fit-content";
    // panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}



document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      toggleAccordion(this);
    });
    if(acc[i].dataset.default === "open") toggleAccordion(acc[i]);
  }
}, false);