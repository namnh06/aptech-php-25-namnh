<?php

echo "Aptech PHP 25 <br>";

var_dump($_POST);
echo "<br>";
echo $_POST['name'];
// if ($_POST['name'] === 'Nam Hai Nguyen') {
//     echo "Xin chao Admin";
// }
$pattern = '/nu/i';
if (preg_match($pattern, $_POST['name'])) {
    echo "<br>Xin chao Admin";
}
$patternEmail = '/@/i';
if (preg_match($patternEmail, $_POST['email'])) {
    echo "<br>email hop le";
    echo "<br>Hack thanh cong";
} else {
    echo "<br> Nhap email vao di";
}

// LUU DU LIEU VAO DATABASE