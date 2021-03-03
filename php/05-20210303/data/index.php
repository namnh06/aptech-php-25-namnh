<?php
echo "Bat dau tien trinh luu du lieu<br>";
$file = fopen('data.json', 'w') or die('Khong tao/ghi duoc file');

$data = '{
            "accounts": [
                {
                    "email": "Nam@gmail.com",
                    "password": 123
                },
                {
                    "email": "Nu@gmail.com",
                    "password": 123
                }
            ]
        }';
echo "...<br>";
fwrite($file, $data);
fclose($file);
echo "Luu du lieu thanh cong";