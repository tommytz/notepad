<?php
  if (isset($_REQUEST["user_name"])) {
    if ($_REQUEST["user_name"] == "Thomas"){
?>
      <h2>Welcome, cool guy</h2>
      <?php
      } else {
      ?>
        <h2>Welcome, <?php echo $_REQUEST["user_name"]?></h2>
  <?php
      } 
  }?>