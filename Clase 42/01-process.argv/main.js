// pnpm i --save-dev @types/node
for (let index = 0; index < process.argv.length; index += 1) {
  console.log(`${index}: ${process.argv[index]}`);
}
