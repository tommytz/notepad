<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <link href="stylesheet.css" rel="stylesheet" type="text/css" />
  <title>Assignment</title>
</head>

<body>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div id="title-edit" contenteditable="true"></div>
      <div id="body-edit" contenteditable="true"></div>
      </br>
      <button id='close'>Done</button>
    </div>
  </div>

  <div id="input">
    <div id="title-input" class="user-input" placeholder="Title" contenteditable="true"></div>
    <div id="body-input" class="user-input" placeholder="Take a note..." contenteditable="true"></div>
    <button id="add">Add</button>
  </div>
  <br />
  <div id="container">
    <!-- Create notes on page load from JSON -->
    <?php
    $url = "note_data.json";
    $data = file_get_contents($url);
    $notes = json_decode($data);
    foreach ($notes as $note) {
      echo
      "<div class='note'>
          <div class='delete'>&times;</div>
          <div class='note-title'>" . $note->title . "</div>
          <div class='note-body'>" . $note->body . "</div>
      </div>";
    }
    ?>

  </div>
  <script src="https://unpkg.com/packery@2/dist/packery.pkgd.js"></script>
  <script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>
  <script src="script.js"></script>
</body>

</html>