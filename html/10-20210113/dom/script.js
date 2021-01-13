function doiSoLop(lop) {
  document.getElementById('chu').innerHTML = 'Aptech PHP ' + lop;
  document.getElementById('chu').style.backgroundColor = 'yellow';
}

function xemAnh() {
  var ten = document.getElementById('anh').src;
  console.log(ten);
  document.getElementById('anh').src =
    'https://www.w3schools.com/js/pic_bulboff.gif';
}
