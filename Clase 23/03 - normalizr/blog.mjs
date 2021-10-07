import util from 'util';
import normalizr from 'normalizr';

const originalData = {
  id: '999',
  posts: [
    {
      id: '123',
      author: {
        id: '1',
        nombre: 'Pablo',
        apellido: 'Perez',
        DNI: '20442654',
        direccion: 'CABA 123',
        telefono: '1567876547',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '324',
          commenter: {
            id: '2',
            nombre: 'Nicole',
            apellido: 'Gonzalez',
            DNI: '20442638',
            direccion: 'CABA 456',
            telefono: '1567811543',
          },
        },
        {
          id: '325',
          commenter: {
            id: '3',
            nombre: 'Pedro',
            apellido: 'Mei',
            DNI: '20446938',
            direccion: 'CABA 789',
            telefono: '1567291542',
          },
        },
      ],
    },
    {
      id: '1123',
      author: {
        id: '2',
        nombre: 'Nicole',
        apellido: 'Gonzalez',
        DNI: '20442638',
        direccion: 'CABA 456',
        telefono: '1567811543',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '1324',
          commenter: {
            id: '1',
            nombre: 'Pablo',
            apellido: 'Perez',
            DNI: '20442654',
            direccion: 'CABA 123',
            telefono: '1567876547',
          },
        },
        {
          id: '1325',
          commenter: {
            id: '3',
            nombre: 'Pedro',
            apellido: 'Mei',
            DNI: '20446938',
            direccion: 'CABA 789',
            telefono: '1567291542',
          },
        },
      ],
    },
    {
      id: '2123',
      author: {
        id: '3',
        nombre: 'Pedro',
        apellido: 'Mei',
        DNI: '20446938',
        direccion: 'CABA 789',
        telefono: '1567291542',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '2324',
          commenter: {
            id: '2',
            nombre: 'Nicole',
            apellido: 'Gonzalez',
            DNI: '20442638',
            direccion: 'CABA 456',
            telefono: '1567811543',
          },
        },
        {
          id: '2325',
          commenter: {
            id: '1',
            nombre: 'Pablo',
            apellido: 'Perez',
            DNI: '20442654',
            direccion: 'CABA 123',
            telefono: '1567876547',
          },
        },
      ],
    },
  ],
};

const user = new normalizr.schema.Entity('users');
const comment = new normalizr.schema.Entity('comments', {
  commenter: user,
});

const article = new normalizr.schema.Entity('articles', {
  author: user,
  comments: [comment],
});

const posts = new normalizr.schema.Entity('posts', {
  posts: [article],
});

console.log('-------------- OBJETO ORIGINAL --------------');
console.log(JSON.stringify(originalData).length);

console.log('-------------- OBJETO NORMALIZADO --------------');
const normalizedData = normalizr.normalize(originalData, posts);
console.log(util.inspect(normalizedData, false, 12, true));
console.log(JSON.stringify(normalizedData).length);

console.log('-------------- OBJETO DESNORMALIZADO --------------');
const denormalizedData = normalizr.denormalize(
  normalizedData.result,
  posts,
  normalizedData.entities,
);

console.log(util.inspect(denormalizedData, false, 12, true));
console.log(JSON.stringify(denormalizedData).length);
