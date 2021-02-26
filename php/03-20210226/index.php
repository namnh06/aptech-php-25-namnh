<?php

$time = date('H');

if ($t < '20') {
    echo 'good day';
} else {
    echo 'good night';
}

$person = [
    'loi chuc' => $time < '20' ? 'good day' : 'good night',
    'gio ngu' => 22,
];

echo $person['loi chuc'];