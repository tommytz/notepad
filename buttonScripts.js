const input = document.getElementById("user-text");
const container = document.getElementById("container");

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

  note.draggable = "true";
  note.ondragstart = function (event) {
    if (event.target instanceof HTMLElement) {
      // use the element's data-value="" attribute as the value to be moving:
      event.dataTransfer.setData("text/plain", event.target.dataset.value);
      event.effectAllowed = "move"; // only allow moves
      console.log(event.target.dataset.value);
    } else {
      event.preventDefault(); // don't allow selection to be dragged
    }
  };

  note.append(topBar, close, noteText);
  container.append(note);
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
