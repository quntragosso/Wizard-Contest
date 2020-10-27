<?php

include("../functions.php");

$game_id = $_POST["gameId"];
$whom = $_POST["whom"];
$card_name = $_POST["cardName"];

// $game_id = 2;
// $whom = "host";
// $card_name = "銅貨";

$pdo = connect_to_db();

// 購入コストの取得
$sql = "SELECT cost_gold from `prototype_pool_table` where name =:card_name";
// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":card_name", $card_name, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $cost_gold = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $cost_gold = $cost_gold[0]["cost_gold"];
}

// 現在のお金の取得
if ($whom == "host") {
    $sql = "SELECT host_gold from `prototype_game_table` where game_id =:game_id";
} else if ($whom == "guest") {
    $sql = "SELECT guest_gold from `prototype_game_table` where game_id =:game_id";
}

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $now_gold = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($whom == "host") {
        $now_gold = $now_gold[0]["host_gold"];
    } else if ($whom == "guest") {
        $now_gold = $now_gold[0]["guest_gold"];
    }
}


// 購入可能か判定
if ($now_gold < $cost_gold) {
    echo "buy cancel";
    exit();
} else {
}

// trashに挿入
$sql = "INSERT INTO prototype_decks_table (id, game_id, whose, card_name, status) VALUE(NULL, :game_id, :whom, :card_name, 'trash')";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
$stmt->bindValue(":card_name", $card_name, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
}

// 現在のお金のupdate。
if ($whom == "host") {
    $sql = "UPDATE `prototype_game_table` SET host_gold = host_gold - :cost_gold where game_id = :game_id";
} else if ($whom == "guest") {
    $sql = "UPDATE `prototype_game_table` SET guest_gold = guest_gold - :cost_gold where game_id = :game_id";
}

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":cost_gold", $cost_gold[0], PDO::PARAM_INT);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    exit();
}
