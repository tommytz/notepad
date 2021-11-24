let inputContainer = document.getElementById("input-container");
let titleInput = document.getElementById("title-input");
let bodyInput = document.getElementById("body-input");
let addButton = document.getElementById("add");
let notesContainer = document.getElementById("notes-container");
let deleteButtons = document.querySelectorAll(".delete");

addButton.addEventListener("click", function () {
  createNote(titleInput.textContent, bodyInput.textContent);
});

deleteButtons.forEach(element => {
  element.addEventListener("click", function () {
    this.parentElement.remove();
    console.log("Note deleted.");
    saveToServer();
  });
})

window.addEventListener('click', function (event) {
  if (!inputContainer.contains(event.target)) {
    titleInput.style.display = "none";
    addButton.style.display = "none";
  } else {
    titleInput.style.display = "block";
    addButton.style.display = "block";
  }
});

function createNote(title, body) {
  let note = document.createElement("div");
  note.className = "note";
  let deleteBtn = document.createElement("img");
  deleteBtn.className = "delete";
  deleteBtn.src = "https://img.icons8.com/material-outlined/24/000000/delete-sign.png";
  let noteTitle = document.createElement("div");
  noteTitle.className = "note-title";
  noteTitle.textContent = title;
  let noteBody = document.createElement("div");
  noteBody.className = "note-body";
  noteBody.textContent = body;
  note.append(deleteBtn, noteTitle, noteBody);
  notesContainer.append(note);
  saveToServer();
}

function noteContentArray() {
  let contentArray = [];
  var notes = document.getElementsByClassName("note");
  for (var note of notes) {
    var noteContent = {
      title: note.querySelector(".note-title").textContent,
      body: note.querySelector(".note-body").textContent
    };
    contentArray.push(noteContent);
  }
  return contentArray;
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