let input = document.getElementById("input");
let titleInput = document.getElementById("title-input");
let bodyInput = document.getElementById("body-input");
let addButton = document.getElementById("add");
// let container = document.getElementById("container");
// let deleteButtons = document.querySelectorAll(".delete");
let notes = document.querySelectorAll(".note");

notes.forEach(element => {
  element.draggable = "true";
});

addButton.addEventListener("click", function () {
  createNote(titleInput.textContent, bodyInput.textContent);
});

// deleteButtons.forEach(element => {
//   element.addEventListener("click", function () {
//     this.parentElement.remove();
//     console.log("Note deleted.");
//     saveToServer();
//   });
// });

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
  // note.className = "note";
  // let deleteBtn = document.createElement("img");
  // deleteBtn.className = "delete";
  // deleteBtn.src = "https://img.icons8.com/material-outlined/24/000000/delete-sign.png";
  // deleteBtn.addEventListener("click", function () {
  //   this.parentElement.remove();
  //   console.log("Note deleted.");
  //   saveToServer();
  // });
  let noteTitle = document.createElement("div");
  noteTitle.className = "note-title";
  noteTitle.textContent = title;
  let noteBody = document.createElement("div");
  noteBody.className = "note-body";
  noteBody.textContent = body;
  note.append(noteTitle, noteBody);
  container.append(note);
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
  console.log("Message sent to server.");
}