// CON IIFE

(function () {
  const a = "A";

  function foo() {
    console.log("foo1" + a);
  }

  foo();
})();

(function () {
  const a = "B";

  function foo() {
    console.log("foo2" + a);
  }

  foo();
})();

// SIN IIFE

function foo() {
  console.log("foo1");
}

function foo() {
  console.log("foo2");
}

foo();

// PARAMETROS

(function (nombre) {
  function foo() {
    console.log("foo3 " + nombre);
  }

  foo();
})("Juan");
