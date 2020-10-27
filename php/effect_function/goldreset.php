<?php

function goldreset($game_id, $whom, $pdo)
{
    // $pdo = connect_to_db();

    if ($whom == "host") {
        $sql = "UPDATE `prototype_game_table` SET host_gold = 0 where game_id = :game_id";
    } else if ($whom == "guest") {
        $sql = "UPDATE `prototype_game_table` SET guest_gold = 0 where game_id = :game_id";
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
    }
};
