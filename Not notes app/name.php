<?php
  if (isset($_REQUEST["user_name"])) {
    if ($_REQUEST["user_name"] == "Thomas"){
      header("Location:http://localhost:8000/");
      } else {
      ?>
        <h2>Welcome, <?php echo $_REQUEST["user_name"]?>, you have to go back to get out of here...</h2>
  <?php
      } 
  }?>