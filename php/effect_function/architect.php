<?php

function architect($game_id, $whom, $token_id, $pdo)
{
    // $pdo = connect_to_db();

    // 建設前にarchitectureの枚数をチェックする。上限は4枚。上限の場合キャンセルする。
    $sql = "SELECT COUNT(*) as cnt FROM `prototype_decks_table` where game_id = :game_id AND whose = :whom AND status = 'archi'";
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
        if ($result[0]["cnt"] >= 4) {
            echo "このカードはプレイできない。";
            exit();
        }
    }

    $sql = "SELECT name from prototype_pool_table where id = :token_id";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":token_id", $token_id, PDO::PARAM_INT);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $card_name = $result[0]["name"];
    }

    $sql = "INSERT INTO prototype_decks_table (id, game_id, whose, card_name, status) VALUE(NULL, :game_id, :whom, :card_name, 'archi')";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":whom", $whom, PDO::PARAM_STR);
    $stmt->bindValue(":card_name", $card_name, PDO::PARAM_STR);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
    }
};
