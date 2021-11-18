const input = document.getElementById("user-text");
const container = document.getElementById("container");
const data = { test: "it's working" };

function createNote() {
  let note = document.createElement("div");
  note.textContent = input.value;
  note.contentEditable = true;
  container.append(note);
  console.log(container.children);
}

function fetchToServer() {
  fetch("save.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
