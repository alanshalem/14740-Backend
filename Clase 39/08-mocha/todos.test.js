const assert = require("assert").strict;
const fs = require("fs");
const Todos = require("./todos");

// ! No es necesario importar "mocha"

describe("test de integracion de tareas", () => {
  it("deberia crear el contendor de tareas vacio", () => {
    const todos = new Todos();

    assert.strictEqual(todos.list().length, 0);
  });

  it("deberia adicionar tareas correctamente", () => {
    const todos = new Todos();

    todos.add("run code");

    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [
      {
        title: "run code",
        complete: false,
      },
    ]);

    todos.add("otra tarea");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      {
        title: "run code",
        complete: false,
      },
      {
        title: "otra tarea",
        complete: false,
      },
    ]);
  });

  it("deberia marcar una tarea como completada", () => {
    const todos = new Todos();
    todos.add("run code");
    todos.add("otra tarea");

    todos.complete("run code");

    assert.deepStrictEqual(todos.list(), [
      {
        title: "run code",
        complete: true,
      },
      {
        title: "otra tarea",
        complete: false,
      },
    ]);
  });
});

describe("comprobar error en completar tarea inexistente", () => {
  it("deberia dar un error cuando no hay tareas cargadas", () => {
    const todos = new Todos();
    const errorEsperado = new Error("No hay tareas");

    assert.throws(() => todos.complete("una tarea mas"), errorEsperado);
  });

  it("deberia dar un error cuando la tarea no existe", () => {
    const todos = new Todos();
    const errorEsperado = new Error("Tarea no encontrada");

    todos.add("run code");

    assert.throws(() => todos.complete("una tarea mas"), errorEsperado);
  });
});

describe("comprobando que saveToFileCb", () => {
  it("deberia guardar una tarea en el archivo todos.txt", (done) => {
    const todos = new Todos();

    todos.add("guardar tarea callback");

    todos.saveToFileCb((err) => {
      assert.strictEqual(fs.existsSync("todos.txt"), true);

      const contendidoEsperado = "guardar tarea callback, false";
      const content = fs.readFileSync("todos.txt", "utf8").toString();

      assert.strictEqual(content, contendidoEsperado);

      return done(err);
    });
  });
});

describe("comprobando que saveToFilePromises() funcione bien", () => {
  before(() => console.log("Comienzo TOTAL del test"));

  after(() => console.log("Final TOTAL del test"));

  beforeEach(() => {
    this.todos = new Todos();

    console.log("Comienzo del test");
  });

  afterEach(() => {
    if (fs.existsSync("todos.txt")) {
      fs.unlinkSync("todos.txt");
    }

    console.log("Fin del test");
  });

  it("deberia guardar una tarea en el archivo todos.txt (then/catch)", () => {
    this.todos.add("guardar tarea Promises TC");

    return this.todos.saveToFilePromise().then(() => {
      assert.strictEqual(fs.existsSync("todos.txt"), true);

      const contendidoEsperado = "guardar tarea Promises TC, false";
      const content = fs.readFileSync("todos.txt", "utf8");

      assert.strictEqual(content, contendidoEsperado);
    });
  });

  it("deberia guardar una tarea en el archivo todos.txt (async/await)", async () => {
    this.todos.add("guardar tarea Promises AA");

    await this.todos.saveToFilePromise();

    assert.strictEqual(fs.existsSync("todos.txt"), true);

    const contendidoEsperado = "guardar tarea Promises AA, false";
    const content = fs.readFileSync("todos.txt", "utf8");

    assert.strictEqual(content, contendidoEsperado);
  });
});
