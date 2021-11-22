<?php
$json = file_get_contents("php://input");
$data = json_decode($json);
var_dump($data);
file_put_contents("note_data.json", $json);
?>