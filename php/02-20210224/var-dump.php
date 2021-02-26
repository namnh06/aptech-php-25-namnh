<?php

$a = 'aptech php';
$b = 25; // int = integer
$c = $a . " " . $b;
$c = "$a $b";
$c = join(" ", [$a, $b]);
var_dump($c);
echo "<br>";
$php25 = ['Quang', 'Hiep', 'Thanh'];
var_dump($php25);
echo "<br>";
echo $php25[2];