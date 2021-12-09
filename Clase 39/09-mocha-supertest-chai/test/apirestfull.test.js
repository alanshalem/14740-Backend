const request = require("supertest");
const { expect } = require("chai");

const generator = require("../generador/usuarios");
const { app } = require("../server");

describe("test api restfull", () => {
  describe("GET", () => {
    it("deberia retornar un estado 200", async () => {
      const response = await request(app).get("/api");

      expect(response.status).to.eql(200);
    });
  });

  describe("POST", () => {
    it("deberia incorporar un usuario", async () => {
      const usuario = generator.get();

      const response = await request(app).post("/api").send(usuario);

      expect(response.status).to.eql(200);

      const user = response.body;

      expect(user.nombre).to.eql(usuario.nombre);
      expect(user.email).to.eql(usuario.email);
    });
  });
});
