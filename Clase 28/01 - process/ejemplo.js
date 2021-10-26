console.log(`Directorio actual de trabajo: ${process.cwd()}`);
console.log(`Id del proceso: ${process.pid}`);
console.log(`Versión de Node: ${process.version}`);
console.log(`Título del proceso: ${process.title}`);
console.log(`Sistema Operativo: ${process.platform}`);
console.log(`Uso de la memoria: ${process.memoryUsage()}`);

// !!!!!!!!!!!!!!!!!!!!!!!!

// process.on(
//   'beforeExit',
//   (code) => console.log(`beforeExit ${code}`),
// );

// !!!!!!!!!!!!!!!!!!!!!!!!

// process.on(
//   'exit',
//   (code) => console.log(`exit ${code}`)
//   ,
// );

// process.exit(2);

// !!!!!!!!!!!!!!!!!!!!!!!!

// process.on(
//   'uncaughtException',
//   (error) => console.log(`Excepcion no manejada --> ${error.message}`),
// );

// setTimeout(
//   () => console.log('Hola mundo!'),
//   1000,
// );

// algo();
// console.log('Chau mundo!');

// !!!!!!!!!!!!!!!!!!!!!!!!

// process.argv.forEach((value, key) => console.log(`${key}: ${value}`));

// !!!!!!!!!!!!!!!!!!!!!!!!

// console.log(process.env);

// !!!!!!!!!!!!!!!!!!!!!!!!

// console.log(process.execPath);

// !!!!!!!!!!!!!!!!!!!!!!!!

// process.stdout.write('Hola Mundo!\n');
