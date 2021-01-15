var php25 = ['Quang', 'Tai', 'Huy', 'Binh', 'Thanh', 'Hoi'];
var hocVien = php25[3];

function inThuCong() {
  var text = php25[0] + '<br>';
  text += php25[1] + '<br>';
  text += php25[2] + '<br>';
  text += php25[3] + '<br>';
  text += php25[4] + '<br>';
  text += php25[5] + '<br>';
  document.getElementById('ten').innerHTML = text;
}

function inChu() {
  document.getElementById('ten').innerHTML = php25;
}

function inBang() {
  var tableBody = document.getElementById('tableBodyTen');
  //   var text =
  //     '<tr>' + '<td>' + 1 + '</td>' + '<td>' + php25[0] + '</td>' + '</tr>';

  //   text += '<tr>' + '<td>' + 2 + '</td>' + '<td>' + php25[1] + '</td>' + '</tr>';
  //   text += '<tr>' + '<td>' + 3 + '</td>' + '<td>' + php25[2] + '</td>' + '</tr>';
  //   text += '<tr>' + '<td>' + 4 + '</td>' + '<td>' + php25[3] + '</td>' + '</tr>';
  //   text += '<tr>' + '<td>' + 5 + '</td>' + '<td>' + php25[4] + '</td>' + '</tr>';
  //   text += '<tr>' + '<td>' + 6 + '</td>' + '<td>' + php25[5] + '</td>' + '</tr>';
  var text = '';
  for (var i = 0; i < php25.length; i++) {
    text +=
      '<tr>' +
      '<td>' +
      (i + 1) +
      '</td>' +
      '<td>' +
      php25[i] +
      '</td>' +
      '</tr>';
  }
  tableBody.innerHTML = text;
}

// ARRAY IN ARRAY
var sanPham = [
  ['iPhone', 10, 'my', 'nhap khau'],
  ['Galaxy', 12, 'han quoc', 'trong nuoc'],
  ['xiaomi', 9, 'trung quoc', 'nhap khau'],
  ['huawei', 15, 'trung quoc', 'buon lau'],
];
for (var i = 0; i < sanPham.length; i++) {
  for (var j = 0; j < sanPham[i].length; j++) {
    console.log[i][j];
  }
}
