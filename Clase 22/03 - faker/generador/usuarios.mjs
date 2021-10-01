import faker from "faker";

faker.locale = "es";

export const generador = () => ({
  nombre: faker.name.firstName(),
  email: faker.internet.email(),
  website: faker.internet.url(),
  image: faker.image.avatar(),
});
