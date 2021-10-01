export const getIndex = (id, usuarios) =>
  usuarios.findIndex((usuario) => usuario.id === id);

export const getFecha = () => new Date().toLocaleString();

export const getNextId = (usuarios) =>
  usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
