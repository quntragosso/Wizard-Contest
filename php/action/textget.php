<?php

// 共通処理
include("../functions.php");

$card_name = $_POST["cardName"];
// $card_name = "大胆な探索魔法";

$sql = "SELECT * from prototype_pool_table where name = :cardname";

$pdo = connect_to_db();
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":cardname", $card_name, PDO::PARAM_STR);
$status = $stmt->execute();

if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $returnArray = [$result[0]["name"], $result[0]["type"], $result[0]["cost_gold"], $result[0]["cost_mana"], $result[0]["get_gold"], $result[0]["get_mana"], $result[0]["text"]];
}

$jsonArray = json_encode($returnArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
echo $jsonArray;
exit();
