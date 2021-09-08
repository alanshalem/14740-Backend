import express from "express";
import { Perimetro } from "./perimetro";
import { Superficie } from "./superficie";

///////////////////

const app = express();

///////////////////

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

///////////////////

const perimetrosRouter = express.Router();
app.use("/perimetro", perimetrosRouter);

const perimetro = new Perimetro();

perimetrosRouter.get("/cuadrado", (request, response) => {
  const lado: number = parseFloat(String(request.query.lado));

  response.json({
    figura: "cuadrado",
    lado: lado,
    perimetro: perimetro.calcularPerimetroCuadrado(lado),
  });
});

perimetrosRouter.get("/rectangulo", (request, response) => {
  const base: number = parseFloat(String(request.query.base));
  const altura: number = parseFloat(String(request.query.altura));

  response.json({
    figura: "rectangulo",
    base: base,
    altura: altura,
    perimetro: perimetro.calcularPerimetroRectangulo(base, altura),
  });
});

perimetrosRouter.get("/circulo", (request, response) => {
  const radio: number = parseFloat(String(request.query.radio));

  response.json({
    figura: "circulo",
    radio: radio,
    perimetro: perimetro.calcularPerimetroCirculo(radio),
  });
});

///////////////////

const superficiesRouter = express.Router();
app.use("/superficie", superficiesRouter);

const superficie = new Superficie();

superficiesRouter.get("/cuadrado", (request, response) => {
  const lado: number = parseFloat(String(request.query.lado));

  response.json({
    figura: "cuadrado",
    lado: lado,
    superficie: superficie.calcularSuperficieCuadrado(lado),
  });
});

superficiesRouter.get("/rectangulo", (request, response) => {
  const base: number = parseFloat(String(request.query.base));
  const altura: number = parseFloat(String(request.query.altura));

  response.json({
    figura: "rectangulo",
    base: base,
    altura: altura,
    superficie: superficie.calcularSuperficieRectangulo(base, altura),
  });
});

superficiesRouter.get("/circulo", (request, response) => {
  const radio: number = parseFloat(String(request.query.radio));

  response.json({
    figura: "circulo",
    radio: radio,
    superficie: superficie.calcularSuperficieCirculo(radio),
  });
});
