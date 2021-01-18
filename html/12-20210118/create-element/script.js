function inDuLieu() {
  var tableElement = document.getElementById('tableBody');
  // 1. TAO TR
  var tr = document.createElement('tr');
  // 2 va 3. TAO TD VA DUA VAO TR
  var td1 = document.createElement('td');
  tr.appendChild(td1);
  var td2 = document.createElement('td');
  tr.appendChild(td2);
  var td3 = document.createElement('td');
  tr.appendChild(td3);
  var td4 = document.createElement('td');
  tr.appendChild(td4);

  // 4. DUA DU LIEU VAO TD
  td1.innerHTML = 1;
  td2.innerHTML = 2;
  td3.innerHTML = 3;
  td4.innerHTML = 4;

  // 5. DUA TR VAO TABLE BODY
  tableElement.appendChild(tr);
}
