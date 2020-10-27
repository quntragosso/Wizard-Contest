<?php
// 受け取りはgameIDと誰のArchiであるか。
include("../functions.php");

$game_id = $_POST["gameId"];
$whose_archi = $_POST["whoseArchi"];

// $game_id = 530066;
// $whose_archi = "guest";

$pdo = connect_to_db();

$sql = "SELECT id,card_name FROM `prototype_decks_table` where game_id = :game_id AND whose = :whose AND status = 'archi'";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
$stmt->bindValue(":whose", $whose_archi, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    // fetchAll()関数でSQLで取得したレコードを配列で取得できる
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $returnArray = [];
    foreach ($result as $record) {
        array_push($returnArray, ["id" => $record["id"], "name" => $record["card_name"]]);
    }
}

$jsonArray = json_encode($returnArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
echo $jsonArray;
exit();
