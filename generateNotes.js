fetch("note_data.json").then(async function (response) {
  let data = await response.json();

  for (var str of data) {
    createNote(str);
  }
});
