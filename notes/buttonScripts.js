const input = document.getElementById("user-text");
const container = document.getElementById("container");
const draggables = document.querySelectorAll(".note");

function userNote() {
  const message = `New note "${input.value}" created.`;
  createNote(input.value);
  console.log(message);
}

function createNote(str) {
  let note = document.createElement("div");
  note.className = "note";
  let topBar = document.createElement("div");
  topBar.className = "top-bar";
  let noteText = createTextArea(str);
  let close = createCloseButton();
  note.append(topBar, close, noteText);

  note.draggable = "true";
  note.addEventListener("dragstart", function () {
    console.log("We dragging out here!");
    note.classList.add("dragging");
  });
  note.addEventListener("dragend", function () {
    console.log("Drag event over.");
    getDragAfterElement();
    note.classList.remove("dragging");
  });
  note.addEventListener("dragover", function (e) {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
  });

  container.append(note);
}

function getDragAfterElement() {
  const draggableElements = [
    ...document.querySelectorAll(".note:not(.dragging)"),
  ];
  console.log(draggableElements);
}

function createCloseButton() {
  let button = document.createElement("button");
  button.className = "close-button";
  button.addEventListener("click", function () {
    this.parentElement.remove();
    console.log("Note deleted.");
  });
  return button;
}

function createTextArea(str) {
  let text = document.createElement("textarea");
  text.value = str;
  text.rows = "5";
  text.className = "note-text";
  return text;
}

function htmlToJSON() {
  let elementArray = [];
  for (var element of container.querySelectorAll("textarea")) {
    elementArray.push(element.value);
  }
  return elementArray;
}

function fetchToServer() {
  fetch("save.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(htmlToJSON()),
  });
  console.log("Notes saved to server.");
}
