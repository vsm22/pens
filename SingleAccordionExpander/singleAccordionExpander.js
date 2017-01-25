(function(){
  Array.prototype.forEach.call(document.getElementsByClassName("accordion-button"), function(el) {
    el.addEventListener("mousedown", toggleExpand);
  });

  function toggleExpand(e) {
    var accordionContainer = e.target.parentNode;
    var accordionContent = accordionContainer.querySelector(".accordion-content");
    var accordionButton = accordionContainer.querySelector(".accordion-button");

    accordionContent.classList.toggle("expanded");

    if (accordionContent.classList.contains("expanded")) {
      accordionButton.innerHTML = "read less &#9650";
    } else {
      accordionButton.innerHTML = "read more &#9660";
    }
  }
}());
