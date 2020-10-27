<?php

function handtrash($game_id, $whose, $pdo)
{
    // $pdo = connect_to_db();

    if ($whose == "host") {
        $sql = "UPDATE `prototype_decks_table` SET status = 'trash' where game_id = :game_id AND status = 'hand' AND whose = 'host'";
    } else if ($whose == "guest") {
        $sql = "UPDATE `prototype_decks_table` SET status = 'trash' where game_id = :game_id AND status = 'hand' AND whose = 'guest'";
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
