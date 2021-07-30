const objeto = {
  meses: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  mostrarMeses: function () {
    for (const mes of this.meses) {
      console.log(mes);
    }
  },
  getNumeroMes: function (mesToSearch) {
    return (
      this.meses.findIndex(
        (mes) => mes.toLowerCase() === mesToSearch.toLowerCase()
      ) + 1
    );
  },
  getLetrasMes: function () {
    let letras = "";
    for (const mes of this.meses) {
      letras += mes.split("")[0];
    }

    return letras;
  },
};

objeto.mostrarMeses();
console.log(objeto.getNumeroMes("junIO"));
console.log(objeto.getLetrasMes());
