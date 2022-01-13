import { copy, writeAll } from "https://deno.land/std/streams/conversion.ts";
import { readFileStr } from "https://deno.land/std@0.55.0/fs/read_file_str.ts";
import { writeFileStr } from "https://deno.land/std@0.55.0/fs/write_file_str.ts";

// #region Read file

const readFile = await Deno.open(
  "05-fileRead.txt",
  {
    read: true,
  },
);

// ! Deno.copy() deprecated
await copy(readFile, Deno.stdout);

console.log("\n");

const content = await readFileStr("05-fileRead.txt");

console.log(content);

// #endregion

// #region Write file

const writeFile = await Deno.open("05-fileWrite.txt", {
  write: true,
  create: true,
});

const contentBytes = new TextEncoder().encode("Hello world");

// ! Deno.writeAll() deprecated
await writeAll(writeFile, contentBytes);

writeFile.close();

await writeFileStr("05-fileWrite2.txt", "Hello world 2!");

// #endregion
