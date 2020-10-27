<?php

// 取得はgameIDと誰のか。
// Infoの対象は山札(枚数), トラッシュ(枚数), 勝利点, マナ, お金。
include("../functions.php");

$game_id = $_POST["gameId"];
$whose = $_POST["whoseInfo"];

// $game_id = 542032;
// $whose = "guest";

$returnArray = [];

sleep(3);

$pdo = connect_to_db();

if ($whose == "host") {
    $sql1 = "SELECT host_point AS point,host_mana AS mana,host_gold AS gold FROM `prototype_game_table` where game_id = :game_id";
    $sql2 = "SELECT COUNT(*) AS deck FROM `prototype_decks_table` where game_id = :game_id AND whose = 'host' AND status = 'deck'";
    $sql3 = "SELECT COUNT(*) AS trash FROM `prototype_decks_table` where game_id = :game_id AND whose = 'host' AND status = 'trash'";
} else if ($whose == "guest") {
    $sql1 = "SELECT guest_point AS point,guest_mana AS mana,guest_gold AS gold FROM `prototype_game_table` where game_id = :game_id";
    $sql2 = "SELECT COUNT(*) AS deck FROM `prototype_decks_table` where game_id = :game_id AND whose = 'guest' AND status = 'deck'";
    $sql3 = "SELECT COUNT(*) AS trash FROM `prototype_decks_table` where game_id = :game_id AND whose = 'guest' AND status = 'trash'";
}

// SQL準備&実行
$stmt = $pdo->prepare($sql1);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    // fetchAll()関数でSQLで取得したレコードを配列で取得できる
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $returnArray = ["point" => $result[0]["point"], "mana" => $result[0]["mana"], "gold" => $result[0]["gold"]];
}

// SQL準備&実行
$stmt = $pdo->prepare($sql2);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    // fetchAll()関数でSQLで取得したレコードを配列で取得できる
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $returnArray["deck"] = $result[0]["deck"];
}

// SQL準備&実行
$stmt = $pdo->prepare($sql3);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    // fetchAll()関数でSQLで取得したレコードを配列で取得できる
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $returnArray["trash"] = $result[0]["trash"];
}

$jsonArray = json_encode($returnArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
echo $jsonArray;
exit();
