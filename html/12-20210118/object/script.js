var nam = {
  ho: 'Nguyen',
  ten: 'Nam',
  id: '123',
  website: 'namcoi.com',
  la: function () {
    console.log(this.ho + this.ten + ' hello world, aptech php 25');
    return {
      hong: 'dau roi',
      a: function () {
        return {};
      },
    };
  },
};

var a = nam.la().hong;
console.log(a);
// document.getElementById().innerHTML;
console.log(Object.getOwnPropertyNames(document));
