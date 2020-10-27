<?php

include("../functions.php");

$userid = $_POST["userId"];
$username = $_POST["username"];

// $username = "manmamij";
// $password = "mamimami";

$userArray = [];

$pdo = connect_to_db();

// 最初に同名同パスのアカウントを探す。
$sql = "SELECT * FROM `prototype_user_table` WHERE id = :userid AND name = :username";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":userid", $userid, PDO::PARAM_INT);
$stmt->bindValue(":username", $username, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        // winとloseを返却
        array_push($userArray, ["win" => $result[0]["win_num"], "lose" => $result[0]["lose_num"]]);
        echo json_encode($userArray);
        exit();
    }
}
