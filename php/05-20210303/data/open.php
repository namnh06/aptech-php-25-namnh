<?php

$file = fopen('data.json', 'r');
$dataRaw = fread($file, filesize('data.json'));
$data = json_decode($dataRaw);

$check = false;
foreach ($data->accounts as $key => $account) {
    $email = $account->email;
    $password = $account->password;
    if (
        $_GET['email'] === $email
        &&
        (int)$_GET['password'] === $password
    ) {
        $check = true;
        echo "dang nhap thanh cong";
        break;
    }
}
if ($check === false) {
    echo "dang nhap that bai";
}