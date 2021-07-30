const fin = () => console.log("terminé");

const mostrarLetras = (word, callback) => {
  let index = 0;
  const intervalId = setInterval(() => {
    console.log(word[index]);
    index++;
    
    if (index === word.length) {
      callback();
      clearInterval(intervalId);
    }
  }, 1000);
};

setTimeout(() => {
  mostrarLetras("¡Hola!", fin);
}, 0);

setTimeout(() => {
  mostrarLetras("¡Hola!", fin);
}, 250);

setTimeout(() => {
  mostrarLetras("¡Hola!", fin);
}, 500);
