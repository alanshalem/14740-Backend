import { Observable } from "rxjs";

/////////////////////////

// function contarPushMultiple(tiempo) {
//   let contadorPushMultiple = 0;
//   return new Observable((observer) => {
//     const intervalId = setInterval(() => {
//       contadorPushMultiple++;
//       if (contadorPushMultiple === 4) {
//         observer.complete();
//         // suscriber.error("Error contador Observable");
//       }

//       observer.next(contadorPushMultiple);
//     }, tiempo);

//     return () => {
//       console.log("Fin contador por return");
//       clearInterval(intervalId);
//     };
//   });
// }

// const observer = {
//   next: (contador) => console.log(contador),
//   error: (error) => console.log(error),
//   complete: () => console.log("Fin contador por complete"),
// };

// let suscriptor = contarPushMultiple(1000).subscribe(observer);

// setTimeout(() => {
//   suscriptor.unsubscribe();
// }, 10000);

/////////////////////////

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});

console.log("Antes de suscribirse");
const observer = {
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("Fin"),
};

observable.subscribe(observer);
console.log("Despues de suscribirse");
