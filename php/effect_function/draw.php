<?php

function draw($game_id, $whom, $pdo)
{
    // $pdo = connect_to_db();

    // ドロー前に手札の枚数をチェックする。上限は8枚。上限の場合キャンセルして、山札を燃やすようなことはしない(上限値まで引いて、余剰についてアクションしない。)
    $sql = "SELECT COUNT(*) as cnt FROM `prototype_decks_table` where game_id = :game_id AND whose = :whom AND status = 'hand'";
    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($result[0]["cnt"] >= 8) {
            exit();
        }
    }

    // ドロー前に山札があるかをチェックする。
    $sql = "SELECT COUNT(*) as cnt FROM `prototype_decks_table` where game_id = :game_id AND whose = :whom AND status = 'deck'";
    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        // fetchAll()関数でSQLで取得したレコードを配列で取得できる
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($result[0]["cnt"] == 0) {
            $sql = "UPDATE `prototype_decks_table` SET status = 'deck' where game_id = :game_id AND whose = :whom AND status = 'trash'";

            // SQL準備&実行
            $stmt = $pdo->prepare($sql);
            $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
            $stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
            $status = $stmt->execute();

            // データ登録処理後
            if ($status == false) {
                $error = $stmt->errorInfo();
                echo json_encode(["error_msg" => "{$error[2]}"]);
                exit();
            } else {
            }
        }
    }

    $sql = "UPDATE `prototype_decks_table` SET status = 'hand' where game_id = :game_id AND whose = :whom AND status = 'deck' ORDER BY RAND() LIMIT 1";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
    }
}
