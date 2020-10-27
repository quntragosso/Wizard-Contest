<?php

include("functions.php");

$id = $_POST["id"];
// $id = 3089;

$pdo = connect_to_db();

$sql = "SELECT card_name from `prototype_decks_table` where id =:id";
// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $result = $result[0]["card_name"];
}

echo json_encode($result);
