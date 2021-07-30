// VAR, LET

var a = "global";

function foo() {
  var a = "local";
  if (true) {
    var a = "if";
    console.log(a);
  }

  console.log(a);
}

foo();
console.log(a);

// HOISTING

function hoisting() {
  console.log(b);
  b = 10;
  console.log(b);
  var b = 20;
  console.log(b);
}

hoisting();

// CONST

const c = "a";
console.log(c);

const d = {
  clave: "valor",
};

console.log(d);
d.clave = 2;
console.log(d);
