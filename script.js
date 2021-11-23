let input_container = document.getElementById("input-container");
let title_input = document.getElementById("title-input");
let body_input = document.getElementById("body-input");
let add_btn = document.getElementById("add");
let notes_container = document.getElementById("notes-container");

add_btn.onclick = function () {
  createNote(title_input.textContent, body_input.textContent);
};

function createNote(title, body) {
  let note = document.createElement("div");
  note.className = "note";
  let note_title = document.createElement("div");
  note_title.className = "note-title";
  note_title.textContent = title;
  let note_body = document.createElement("div");
  note_body.className = "note-body";
  note_body.textContent = body;
  note.append(note_title, note_body);
  notes_container.append(note);
  saveToServer();
}

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

function noteContentArray() {
  let elementArray = [];
  for (var element of notes_container.children) {
    let contentArray = [];
    for (var content of element.children) {
      contentArray.push(content.textContent);
    }
    elementArray.push(contentArray);
  }
  return elementArray;
}

function saveToServer() {
  fetch("save.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteContentArray()),
  });
  console.log("Message saved to server.");
}