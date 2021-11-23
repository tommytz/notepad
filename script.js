let input_container = document.getElementById("input-container");
let title_input = document.getElementById("title-input");
let body_input = document.getElementById("body-input");
let add_btn = document.getElementById("add");

window.addEventListener('click', function (event) {
  if (!input_container.contains(event.target)) {
    hide();
  } else {
    show();
  }
});

function show() {
  title_input.style.display = "block";
  add_btn.style.display = "block";
  console.log("showing rest of input area");
}

function hide() {
  title_input.style.display = "none";
  add_btn.style.display = "none";
  console.log("hiding rest of input area");
}