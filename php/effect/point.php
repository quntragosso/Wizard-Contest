<?php

include("../functions.php");
include("../effect_function/point.php");

// $game_id = 32607536;
// $whom = "host";
// $add_point = 3;

$game_id = $_POST["game_id"];
$whom = $_POST["whom"];
$add_point = $_POST["add_point"];

$pdo = connect_to_db();

point($game_id, $whom, $add_point, $pdo);

exit();
