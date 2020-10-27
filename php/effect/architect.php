<?php

include("../functions.php");
include("../effect_function/architect.php");

// $game_id = 736376;
// $whom = "host";
// $token_id = 16;

$game_id = $_POST["gameId"];
$whom = $_POST["whom"];
$token_id = $_POST["tokenId"];

$pdo = connect_to_db();

architect($game_id, $whom, $token_id, $pdo);

exit();
