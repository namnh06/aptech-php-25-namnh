function bat() {
  // DAY LA FUNCTION DE BAT BONG DEN
  document.getElementById('anh').src = './pic_bulbon.gif';
}

function tat() {
  // DAY LA FUNCTION DE TAT BONG DEN
  document.getElementById('anh').src = './pic_bulboff.gif';
}

function batTat() {
  //   console.log(document.getElementById('anh').src);
  var a = document.getElementById('anh').src;
  var ketQua = a.includes('pic_bulbon.gif');
  //   if (
  //     document.getElementById('anh').src == 'http://127.0.0.1:5500/'
  //   ) {
  if (ketQua) {
    console.log('Bong den dang bat');
    document.getElementById('anh').src = './pic_bulboff.gif';
  } else {
    console.log('Bong den dang tat');
    document.getElementById('anh').src = './pic_bulbon.gif';
  }
}
