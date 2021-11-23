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
      <div>
        <button id="add">Add</button>
      </div>
    </div>
    <br/>
    <div id="notes-container">

    <?php
    $title = "Hello title";
    $message = "Hello world";  
    for($i = 0; $i < 5; $i++){
      echo "<div class='note'><div>" . $title . "</div><div>" . $message . "</div></div>";
    }
    ?>
    
    </div>
    <script src="script.js"></script>
  </body>
</html>
