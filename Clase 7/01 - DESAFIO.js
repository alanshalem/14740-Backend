let moment = require("moment");

const format = "DD/MM/YYYY";
const hoy = moment();
const nacimiento = moment(["03-06-1988"], format);
console.log(
  `Hoy es ${hoy.format(format)}
Nací el ${nacimiento.format(format)}
Desde mi nacimento han pasado ${hoy.diff(nacimiento,'years')} años.
Desde mi nacimento han pasado ${hoy.diff(nacimiento,'days')} días.`
);
