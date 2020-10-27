<?php

include("../functions.php");
include("../effect_function/handtrash.php");
include("../effect_function/goldreset.php");
include("../effect_function/draw.php");

$game_id = $_POST["gameId"];
$whom = $_POST["whom"];

// $game_id = 543299;
// $whom = "host";

$pdo = connect_to_db();

handtrash($game_id, $whom, $pdo);
goldreset($game_id, $whom, $pdo);
for ($i = 0; $i < 4; $i++) {
    draw($game_id, $whom, $pdo);
}

exit();
