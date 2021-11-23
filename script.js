let title_input = document.getElementById("title-input");
let body_input = document.getElementById("body-input");

function show() {
  title_input.style.display = "block";
  console.log("showing");
}

function hide() {
  title_input.style.display = "none";
  console.log("hiding");
}

// body_input.addEventListener(onfocus, show());

// body_input.addEventListener(onblur, hide());