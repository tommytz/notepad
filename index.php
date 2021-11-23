<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link href="stylesheet.css" rel="stylesheet" type="text/css" />
    <title>Assignment</title>
  </head>
  <body>
    <div id="input-container">
      <div id="title-input" class="user-input" placeholder="Title" contenteditable="true"></div>
      <div id="body-input" class="user-input" placeholder="Take a note..." contenteditable="true"></div>
      <button id="add">Add</button>
    </div>
    <br/>
    <div id="notes-container">

    <!-- Create notes on page load -->
    <?php
    $url = "note_data.json";
    $data = file_get_contents($url);
    $notes = json_decode($data);
    foreach ($notes as $note) {
      echo 
      "<div class='note'>
        <div class='note-title'>" . $note[0] . "</div>
        <div class='note-body'>" . $note[1] . "</div>
      </div>";
    }
    ?>

    </div>
    <script src="script.js"></script>
  </body>
</html>
