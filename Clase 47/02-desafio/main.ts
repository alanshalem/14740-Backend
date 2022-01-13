import { writeAll } from "https://deno.land/std/streams/conversion.ts";
import {
  bgWhite,
  green,
  red,
  yellow,
} from "http://deno.land/std/fmt/colors.ts";

const numbers: number[] = Deno.args.map((arg: string) => Number(arg));

const datos = {
  numbers,
  promedio: numbers.reduce((previous, current) => previous + current) /
    numbers.length,
  min: Math.min(...numbers),
  max: Math.max(...numbers),
};

const writeFile = await Deno.open(
  "resultados.dat",
  {
    write: true,
    create: true,
  },
);

const dataString = `*****************************
Números: ${datos.numbers}
Mínimo: ${datos.min}
Máximo: ${datos.max}
Promedio: ${datos.promedio}
*****************************`;

const contentBytes = new TextEncoder().encode(dataString);

// ! Deno.writeAll() deprecated
await writeAll(
  writeFile,
  contentBytes,
);

writeFile.close();

console.log(`*****************************
Números: ${datos.numbers}
${bgWhite(yellow(`Mínimo: ${datos.min}`))}
${bgWhite(red(`Máximo: ${datos.max}`))}
${bgWhite(green(`Promedio: ${datos.promedio}`))}
*****************************`);
