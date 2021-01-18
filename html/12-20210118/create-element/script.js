function inDuLieu() {
  var sanPham = [
    ['iPhone', 10, 'my', 'nhap khau'],
    ['Galaxy', 12, 'han quoc', 'trong nuoc'],
    ['xiaomi', 9, 'trung quoc', 'nhap khau'],
    ['huawei', 15, 'trung quoc', 'buon lau'],
  ];
  var tableElement = document.getElementById('tableBody');
  for (var i = 0; i < sanPham.length; i++) {
    // 1. TAO TR
    var tr = document.createElement('tr');
    for (var j = 0; j < sanPham[i].length; j++) {
      // 2. TAO TD
      var td = document.createElement('td');
      // 3. DUA DU LIEU VAO TD
      td.innerHTML = sanPham[i][j];
      // 4. DUA TD VAO TR
      tr.appendChild(td);
    }
    // 5. DUA TR VAO TABLE BODY
    tableElement.appendChild(tr);
  }
}
