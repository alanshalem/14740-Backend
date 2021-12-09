const request = require("supertest");
const { expect } = require("chai");
const axios = require("axios").default;
const { app } = require("./app");
const server = require("./server");

// #region [SUPERTEST]

describe("post ingreso", () => {
  it("should return status 200", async () => {
    const response = await request(app).post("/ingreso");

    expect(response.status).to.equal(200);
  });
});

describe("get egreso", () => {
  const numeros = [];

  before(async () => {
    let numero = 100;
    const results = [];

    for (let index = 0; index < 10; index += 1) {
      numero += 1;
      numeros.push(numero);
      results.push(request(app).post("/ingreso").send({ numero }));
    }

    await Promise.all(results);
  });

  it("should return status 200", async () => {
    const response = await request(app).get("/egreso");

    expect(response.status).to.equal(200);
  });

  it("should return the numbers", async () => {
    const response = await request(app).get("/egreso");

    expect(response.body).to.include.members(numeros);
  });
});

// #endregion

// #region [axios]

describe("post ingreso", () => {
  before(() => server.on());

  after(() => server.off());

  it("should return status 200", async () => {
    const response = await axios.post("http://localhost:8080/ingreso", {
      numero: 100,
    });

    expect(response.status).to.equal(200);
  });
});

describe("get egreso", () => {
  const numeros = [];

  before(async () => {
    let numero = 100;
    const results = [];

    server.on();

    for (let index = 0; index < 10; index += 1) {
      numero += 1;
      numeros.push(numero);
      results.push(
        axios.post("http://localhost:8080/ingreso", {
          numero,
        })
      );
    }

    await Promise.all(results);
  });

  after(() => server.off());

  it("should return status 200", async () => {
    const response = await axios.get("http://localhost:8080/egreso");

    expect(response.status).to.equal(200);
  });

  it("should return the numbers", async () => {
    const response = await axios.get("http://localhost:8080/egreso");

    expect(response.data).to.include.members(numeros);
  });
});

// #endregion
