const input = document.getElementById("user-text");
const container = document.getElementById("container");
const data = { test: "it's working" };

function userNote() {
  console.log(input.value);
  createNote(input.value);
}

function createNote(str) {
  let note = document.createElement("div");
  note.textContent = str;
  note.contentEditable = true;
  container.append(note);
  console.log(container.children);
}

function htmlToJSON() {
  let elementArray = [];
  for (var element of container.children) {
    elementArray.push(element.textContent);
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

// export { createNote };
