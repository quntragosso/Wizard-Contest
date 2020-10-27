<?php

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: GET, POST');
    exit();
}
header('Access-Control-Allow-Origin: *');

function connect_to_db()
{
    // DB接続の設定
    // localhost用
    // $dbn = 'mysql:dbname=wizard_contest;charset=utf8;port=3306;host=localhost';
    // $user = 'root';
    // $pwd = '';

    //デプロイ用
    $dbn = 'mysql:dbname=bfa202c11f4d8f33efcd96447155e00a;charset=utf8;port=3306;host=mysql-2.mc.lolipop.lan';
    $user = 'bfa202c11f4d8f33efcd96447155e00a';
    $pwd = 'Qunc57e8acfd7e87';


    try {
        // ここでDB接続処理を実行する
        return new PDO($dbn, $user, $pwd);
    } catch (PDOException $e) {
        // DB接続に失敗した場合はここでエラーを出力し，以降の処理を中止する
        echo json_encode(["db error" => "{$e->getMessage()}"]);
        exit();
    }
}
