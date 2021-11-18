<?php
$json = file_get_contents("php://input");
$data = json_decode($json);
echo $data->test;
file_put_contents("test_data.json", $json);
?>