<?php

include("../functions.php");

// $isHost = "host or guest";

$game_id = $_POST["gameId"];
$isHost = $_POST["isHost"];

// $game_id = 932558;
// $isHost = "guest";



if ($isHost == "host") {
    $pdo = connect_to_db();

    $sql = "SELECT * FROM `prototype_pool_table` where type != 'トークンカード' AND id > 6 ORDER BY RAND() LIMIT 10";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        // fetchAll()関数でSQLで取得したレコードを配列で取得できる
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $newArray = [];
        foreach ($result as $record) {
            array_push($newArray, ["id" => $record["id"], "name" => $record["name"]]);
        };
    }

    $sql = "INSERT INTO prototype_market_table (id, game_id, top0, top1, top2, top3, top4, top5, top6, top7, bottom0, bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7) VALUES (NULL, :game_id, 1,2,3, :top3, :top4, :top5, :top6, :top7, 4,5,6,:bottom3,:bottom4,:bottom5,:bottom6,:bottom7)";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":top3", $newArray[0]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":top4", $newArray[1]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":top5", $newArray[2]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":top6", $newArray[3]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":top7", $newArray[4]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":bottom3", $newArray[5]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":bottom4", $newArray[6]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":bottom5", $newArray[7]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":bottom6", $newArray[8]["id"], PDO::PARAM_INT);
    $stmt->bindValue(":bottom7", $newArray[9]["id"], PDO::PARAM_INT);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode($newArray, ["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        echo json_encode($newArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
        exit();
    }
} else if ($isHost == "guest") {
    sleep(1);
    $pdo = connect_to_db();

    $sql = "SELECT * FROM `prototype_market_table` where game_id = :game_id";

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
        // fetchAll()関数でSQLで取得したレコードを配列で取得できる
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $result = $result[0];
        $idArray = [$result["top3"], $result["top4"], $result["top5"], $result["top6"], $result["top7"], $result["bottom3"], $result["bottom4"], $result["bottom5"], $result["bottom6"], $result["bottom7"]];
    }

    $newArray = [];
    foreach ($idArray as $id) {
        $sql = "SELECT * FROM `prototype_pool_table` where id = :id";
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
            // fetchAll()関数でSQLで取得したレコードを配列で取得できる
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = $result[0];
            array_push($newArray, ["id" => $result["id"], "name" => $result["name"]]);
        }
    }
    echo json_encode($newArray, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
    exit();
}
