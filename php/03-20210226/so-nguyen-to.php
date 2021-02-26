<?php

for ($i = 0; $i <= 100; $i++) {
    if ($i < 2) {
        continue;
    }
    $check = false; // global scope
    for ($j = 2; $j < ($i / 2); $j++) {
        if ($i % $j == 0) {
            $check = false; // local scope
            break;
        }
        $check = true;
    }
    if ($i == 2 || $i == 3 || $check) {
        echo "So nguyen to : $i <br>";
    }
}