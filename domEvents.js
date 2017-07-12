document.addEventListener("dblclick", function(event) {
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;
  console.log(event);
});