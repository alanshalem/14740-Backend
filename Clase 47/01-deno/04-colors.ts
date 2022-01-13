import {
  bgWhite,
  bgYellow,
  bold,
  green,
  red,
} from "https://deno.land/std@0.116.0/fmt/colors.ts";

console.log(bgYellow(bold(red("Hola mundo!"))));
console.log(bgWhite(bold(green("Hola mundo!"))));
