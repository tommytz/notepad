const input = document.getElementById("input");
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");
const addButton = document.getElementById("add");
const container = document.getElementById("container");
const deleteButtons = document.querySelectorAll(".delete");
const notes = document.querySelectorAll(".note");
const draggableElements = [];

const grid = new Packery(container, {
  itemSelector: '.note',
  gutter: 10,
  columnWidth: '.note'
});

grid.on('dragItemPositioned', function (draggedItem) {
  saveToServer();
});

notes.forEach(element => {
  let draggable = new Draggabilly(element, {});
  grid.bindDraggabillyEvents(draggable);
  draggableElements.push(draggable);
});

addButton.addEventListener("click", function () {
  createNote(titleInput.textContent, bodyInput.textContent);
});

function removeNote() {
  grid.remove(this.parentElement);
  console.log("Note deleted.");
  saveToServer();
}

deleteButtons.forEach(element => {
  element.addEventListener("click", removeNote);
});

window.addEventListener('click', function (event) {
  if (!input.contains(event.target)) {
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
  let noteTitle = document.createElement("div");
  noteTitle.className = "note-title";
  noteTitle.textContent = title;
  let noteBody = document.createElement("div");
  noteBody.className = "note-body";
  noteBody.textContent = body;
  note.append(createDeleteBtn(), noteTitle, noteBody);
  let draggable = new Draggabilly(note, {});
  grid.bindDraggabillyEvents(draggable);
  draggableElements.push(draggable);
  container.append(note);
  grid.appended(note);
  saveToServer();
}

function createDeleteBtn() {
  let deleteBtn = document.createElement("img");
  deleteBtn.className = "delete";
  deleteBtn.src = "https://img.icons8.com/material-outlined/24/000000/delete-sign.png";
  deleteBtn.addEventListener("click", removeNote);
  return deleteBtn;
}

function noteContentArray() {
  let contentArray = [];
  let notes = grid.getItemElements();
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
  console.log("Message sent to server.");
}