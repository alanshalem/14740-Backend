const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(new Date().getSeconds());
  }, 1000);
});

(async () => {
  const promesas = [
    promesa,
    promesa,
    promesa,
    promesa,
    promesa,
    promesa,
    promesa,
  ];

  for (const promesa of promesas) {
    console.log(promesa);
  }

  for await (const promesa of promesas) {
    console.log(promesa);
  }
})();
