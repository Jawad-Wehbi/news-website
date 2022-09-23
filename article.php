<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connectionapi.php");


$query = $mysqli->prepare("SELECT text , image , title  FROM articles");
$query->execute();
$return = $query -> get_result();
$response=[];

while ($a = $return->fetch_assoc()){
$response []=$a;
}

echo json_encode($response);
?>