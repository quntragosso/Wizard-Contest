<?php

function activate($game_id, $whose_archi, $pdo)
{
    // $pdo = connect_to_db();

    // アーキテクトlistの取得
    $sql = "SELECT * from `prototype_decks_table` where game_id =:game_id AND whose = :whose_archi AND status = 'archi'";
    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":whose_archi", $whose_archi, PDO::PARAM_STR);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
        // decksから引っ張った情報
        $archi_list = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    foreach ($archi_list as $archi) {
        // card_nameからeffectの取得。
        $sql = "SELECT * from `prototype_pool_table` where name =:card_name";
        // SQL準備&実行
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":card_name", $archi["card_name"], PDO::PARAM_STR);
        $status = $stmt->execute();

        // データ登録処理後
        if ($status == false) {
            $error = $stmt->errorInfo();
            echo json_encode(["error_msg" => "{$error[2]}"]);
            exit();
        } else {
            // poolから引っ張った情報
            $this_info = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        if ($this_info[0]["effect1"] == "draw") {
            for ($i = 0; $i < $this_info[0]["effect2"]; $i++) {
                draw($game_id, $whose_archi, $pdo);
            }
        } else if ($this_info[0]["effect1"] == "point") {
            point($game_id, $whose_archi, $this_info[0]["effect2"], $pdo);
        } else if ($this_info[0]["effect1"] == "architect") {
            architect($game_id, $whose_archi, $this_info[0]["effect2"], $pdo);
        } else if ($this_info[0]["effect1"] == "mana") {
            manaplus($game_id, $whose_archi, $this_info[0]["effect2"], $pdo);
        } else if ($this_info[0]["effect1"] == "gold") {
            goldplus($game_id, $whose_archi, $this_info[0]["effect2"], $pdo);
        }
    }
}
