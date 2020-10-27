<?php

include("../functions.php");

include("../effect_function/point.php");
include("../effect_function/architect.php");
include("../effect_function/manaplus.php");
include("../effect_function/goldplus.php");
include("../effect_function/activate.php");

$game_id = $_POST["gameId"];
$whom = $_POST["whom"];
$card_name = $_POST["cardName"];
$card_id = $_POST["cardId"];
$action_played = $_POST["actionPlayed"];

// $game_id = 480366;
// $whom = "host";
// $card_name = "動力錬成";
// $card_id = 3819;
// $action_played = false;

$pdo = connect_to_db();

// 金コストの取得と確認、マナコストの取得と確認
// card_nameから取得して保持。
$sql = "SELECT * from `prototype_pool_table` where name =:card_name";
// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":card_name", $card_name, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    // poolから引っ張った情報
    $played_card = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

if ($action_played == "played") {
    if ($played_card[0]["type"] == "行動カード" || $played_card[0]["type"] == "魔法カード") {
        echo "play cancel";
        exit();
    }
}

// マナコストが0でない場合、マナチェック。
if ($played_card[0]["cost_mana"] > 0) {
    // 現在のマナの取得
    if ($whom == "host") {
        $sql = "SELECT host_mana from `prototype_game_table` where game_id =:game_id";
    } else if ($whom == "guest") {
        $sql = "SELECT guest_mana from `prototype_game_table` where game_id =:game_id";
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
        $now_mana = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($whom == "host") {
            $now_mana = $now_mana[0]["host_mana"];
        } else if ($whom == "guest") {
            $now_mana = $now_mana[0]["guest_mana"];
        }
    }

    // プレイ可能か判定
    if ($now_mana < $played_card[0]["cost_mana"]) {
        echo "play cancel";
        exit();
    } else {
    }
}


// 勝利点、マナ、金の増加
// マナの消費、(金の消費)
if ($whom == "host") {
    $sql = "UPDATE `prototype_game_table` SET host_mana = host_mana + :add_host_mana, host_gold = host_gold + :add_host_gold where game_id = :game_id";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":add_host_mana", $played_card[0]["get_mana"] - $played_card[0]["cost_mana"], PDO::PARAM_INT);
    $stmt->bindValue(":add_host_gold", $played_card[0]["get_gold"], PDO::PARAM_INT);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
    }
} else if ($whom == "guest") {
    $sql = "UPDATE `prototype_game_table` SET guest_mana = guest_mana + :add_guest_mana, guest_gold = guest_gold + :add_guest_gold where game_id = :game_id";

    // SQL準備&実行
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(":game_id", $game_id, PDO::PARAM_INT);
    $stmt->bindValue(":add_guest_mana", $played_card[0]["get_mana"] - $played_card[0]["cost_mana"], PDO::PARAM_INT);
    $stmt->bindValue(":add_guest_gold", $played_card[0]["get_gold"], PDO::PARAM_INT);
    $status = $stmt->execute();

    // データ登録処理後
    if ($status == false) {
        $error = $stmt->errorInfo();
        echo json_encode(["error_msg" => "{$error[2]}"]);
        exit();
    } else {
    }
}

// card_idをhandからtrashへ。
$sql = "UPDATE `prototype_decks_table` SET status = 'trash' where id = :card_id";

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":card_id", $card_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
}

// 別の関数(効果)があるかどうか。
if ($played_card[0]["effect1"] == "draw") {
    include("../effect_function/draw.php");
    for ($i = 0; $i < $played_card[0]["effect2"]; $i++) {
        draw($game_id, $whom, $pdo);
    }
} else if ($played_card[0]["effect1"] == "point") {
    point($game_id, $whom, $played_card[0]["effect2"], $pdo);
} else if ($played_card[0]["effect1"] == "architect") {
    architect($game_id, $whom, $played_card[0]["effect2"], $pdo);
} else if ($played_card[0]["effect1"] == "mana") {
    manaplus($game_id, $whom, $played_card[0]["effect2"], $pdo);
} else if ($played_card[0]["effect1"] == "gold") {
    goldplus($game_id, $whom, $played_card[0]["effect2"], $pdo);
} else if ($played_card[0]["effect1"] == "activate") {
    activate($game_id, $whom, $pdo);
}


if ($played_card[0]["type"] == "行動カード" || $played_card[0]["type"] == "魔法カード") {
    echo json_encode("play action");
    exit();
}

exit();
