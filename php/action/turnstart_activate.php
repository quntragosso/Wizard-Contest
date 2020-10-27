<?php

include("../functions.php");
include("../effect_function/activate.php");

include("../effect_function/point.php");
include("../effect_function/draw.php");
include("../effect_function/manaplus.php");
include("../effect_function/goldplus.php");


$game_id = $_POST["gameId"];
$whose_archi = $_POST["whose"];

// $game_id = 480366;
// $whose_archi = "host";

$pdo = connect_to_db();

activate($game_id, $whose_archi, $pdo);

exit();
