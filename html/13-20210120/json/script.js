function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //   var string = this.responseText;
      //   var data = JSON.parse(string);
      //   console.log(data.name);
      //   //   console.log(typeof this.responseText);
      //   document.getElementById('demo').innerHTML = data.name + ' - ' + data.age;
      var duLieuTho = this.responseText;
      var duLieuDuocChuyenDoi = JSON.parse(duLieuTho);
      console.log(duLieuDuocChuyenDoi.users);
      console.log(duLieuDuocChuyenDoi.users[0].email);
    }
  };
  xhttp.open(
    'GET',
    'https://namcoi.com/du-an/aptech-php-laravel-crud-user/public/api/users',
    true
  );
  xhttp.send();
  console.log('send');
}

var a = {
  name: 'Nam',
};
console.log(typeof a);
// a.name
// a['name']

var b = {
  users: [
    {
      password: 'abc',
      addresses: [{ city: 'Da Nang' }, { city: 'Ha Noi' }],
      work: function () {
        return {
          information: [
            {
              salary: '1000',
            },
            {
              salary: '2000',
            },
          ],
        };
      },
    },
  ],
};
console.log(b.users[0].password);
console.log(b.users[0].addresses[1].city);
console.log(b.users[0].work().information[1].salary);
