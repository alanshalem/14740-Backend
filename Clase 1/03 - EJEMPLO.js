var a = 10;
(function () {
  var a = 20;
  console.log(a);
  if (true) {
    var a = 30;
    a = 40;
    console.log(a);
  }

  console.log(a);
})();

console.log(a);
