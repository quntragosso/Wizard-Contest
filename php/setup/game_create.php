<?php

include("../functions.php");

$game_id = $_POST["gameId"];
$host_name = $_POST["hostName"];
$guest_name = $_POST["guestName"];

// $game_id = 1234;

$pdo = connect_to_db();

$sql = "INSERT INTO `prototype_game_table`(`id`, `game_id`, `host_name`, `guest_name`, `host_point`, `host_mana`, `host_gold`, `guest_point`, `guest_mana`, `guest_gold`) VALUES (NULL,:game_id, :host_name,:guest_name,0,0,0,0,0,0)";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$stmt->bindValue(":host_name", $host_name, PDO::PARAM_STR);
$stmt->bindValue(":guest_name", $guest_name, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    exit();
}
