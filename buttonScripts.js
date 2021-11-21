const input = document.getElementById("user-text");
const container = document.getElementById("container");
const data = { test: "it's working" };

function userNote() {
  console.log(input.value);
  createNote(input.value);
}

function createNote(str) {
  let note = document.createElement("div");
  note.className = "note";
  let noteText = document.createElement("textarea");
  noteText.value = str;
  noteText.className = "note-text";
  let close = createCloseButton();
  note.append(close, noteText);
  container.append(note);
  console.log(container.children);
}

function createCloseButton() {
  let button = document.createElement("button");
  button.className = "close-button";
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
  return button;
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
}
