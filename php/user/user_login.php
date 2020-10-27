<?php

include("../functions.php");

$username = $_POST["username"];
$password = isset($_POST["password"]) ? $_POST["password"] : "";

// $username = "manmamij";
// $password = "mamimami";

if ($password == "") {
    exit();
}

$userArray = [];

$pdo = connect_to_db();

// 最初に同名同パスのアカウントを探す。
$sql = "SELECT * FROM `prototype_user_table` WHERE name = :username AND password = :password";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":username", $username, PDO::PARAM_STR);
$stmt->bindValue(":password", $password, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        // userIDとusernameを返却
        array_push($userArray, ["id" => $result[0]["id"], "name" => $result[0]["name"], "win" => $result[0]["win_num"], "lose" => $result[0]["lose_num"]]);
        echo json_encode($userArray);
        exit();
    }
}

// 同名同パスは存在しえないため、必ず登録処理が行われる。
$sql = "INSERT INTO `prototype_user_table`(`id`, `name`, `password`, `win_num`, `lose_num`) VALUES (NULL,:username, :password,0,0)";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":username", $username, PDO::PARAM_STR);
$stmt->bindValue(":password", $password, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
}

// 登録後idを引っ張る必要がある。
$sql = "SELECT * FROM `prototype_user_table` WHERE name = :username AND password = :password";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":username", $username, PDO::PARAM_STR);
$stmt->bindValue(":password", $password, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // userIDとusernameを返却
    if (count($result) == 1) {
        array_push($userArray, ["id" => $result[0]["id"], "name" => $result[0]["name"], "win" => $result[0]["win_num"], "lose" => $result[0]["lose_num"]]);
        echo json_encode($userArray);
        exit();
    }
}

var_dump("ここまで", $password, $result, count($result));
exit();
