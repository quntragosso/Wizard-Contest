<?php

function point($game_id, $whom, $add_point, $pdo)
{
    // $pdo = connect_to_db();

    if ($whom == "host") {
        $sql = "UPDATE `prototype_game_table` SET host_point = host_point + :add_point where game_id = :game_id";
    } else if ($whom == "guest") {
        $sql = "UPDATE `prototype_game_table` SET guest_point = guest_point + :add_point where game_id = :game_id";
    }

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":add_point", $add_point, PDO::PARAM_INT);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
    }
}
