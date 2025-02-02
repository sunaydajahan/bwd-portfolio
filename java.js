let name = prompt("Who are you?", "your name");

alert("Hello! " + name + " Welcome! ");
let visitorDisplay = document.getElementById("visitor");
let button2 = document.getElementById("button2");
let visitor = localStorage.getItem("visitor")
  ? parseInt(localStorage.getItem("visitor"))
  : 0;
visitorDisplay.textContent = visitor;

button2.addEventListener("click", function () {
  visitor++;
  visitorDisplay.textContent = visitor;
  localStorage.setItem("visitor", visitor);
});

