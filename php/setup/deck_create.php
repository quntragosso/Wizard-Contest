<?php

include("../functions.php");

$game_id = $_POST["gameId"];
$whose = $_POST["whoseDeck"];

// $game_id = 2;
// $whose = "guest";

$bronze_money = "銅貨";
$minimum_stone = "小さな魔石";

$pdo = connect_to_db();

$sql = "INSERT INTO prototype_decks_table (id, game_id, whose, card_name, status) VALUES";

for ($i = 0; $i < 6; $i++) {
    $sql .= "(NULL, :game_id, :whose, :bronzemoney, 'deck'),";
};
$sql .= "(NULL, :game_id, :whose, :minimum_stone, 'deck'),";
$sql .= "(NULL, :game_id, :whose, :minimum_stone, 'deck')";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$stmt->bindValue(":whose", $whose, PDO::PARAM_STR);
$stmt->bindValue(":bronzemoney", $bronze_money, PDO::PARAM_STR);
$stmt->bindValue(":minimum_stone", $minimum_stone, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    exit();
}
