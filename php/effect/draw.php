<?php

include("../functions.php");
include("../effect_function/draw.php");

// $game_id = 444130;
// $whom = "host";
// $times = 4;

$game_id = $_POST["gameId"];
$whom = $_POST["whom"];
$times = $_POST["times"];

$pdo = connect_to_db();

for ($i = 0; $i < $times; $i++) {
    draw($game_id, $whom, $pdo);
}

exit();
