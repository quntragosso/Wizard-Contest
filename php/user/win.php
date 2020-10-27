<?php

include("../functions.php");

$user_id = $_POST["userId"];
$username = $_POST["username"];

// $user_id = 3;
// $username = "manmamij";

$pdo = connect_to_db();

$sql = "UPDATE `prototype_user_table` SET win_num = win_num + 1 where id = :id AND name = :name";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $user_id, PDO::PARAM_INT);
$stmt->bindValue(":name", $username, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    exit();
}
