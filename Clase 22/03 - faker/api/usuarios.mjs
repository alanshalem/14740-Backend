import { generador } from "../generador/usuarios.mjs";
import { getIndex, getFecha, getNextId } from "../util.mjs";

let usuarios = [];

export const generar = (request, response) => {
  const cantidad = request.params.cantidad || 50;

  usuarios = [];
  for (let index = 0; index < cantidad; index++) {
    const usuario = generador();
    usuario.id = index + 1;
    usuario.fecha = getFecha();
    usuarios.push(usuario);
  }

  response.send(usuarios);
};

export const get = (request, response) => {
  const id = Number(request.params.id);
  if (id) {
    const index = getIndex(id, usuarios);
    const usuario = usuarios[index];

    response.send(usuario);
  } else {
    response.send(usuarios);
  }
};

export const post = (request, response) => {
  const usuario = request.body;

  usuario.fecha = getFecha();
  usuario.id = getNextId(usuarios);
  usuarios.push(usuario);

  response.send(usuario);
};

export const put = (request, response) => {
  const id = Number(request.params.id);
  const usuarioNuevo = request.body;

  usuarioNuevo.id = id;
  usuarioNuevo.fecha = getFecha();

  const index = getIndex(id, usuarios);
  const usuarioActual = usuarios[index];
  const usuarioActualizado = {
    ...usuarioActual,
    ...usuarioNuevo,
  };

  usuarios.splice(index, 1, usuarioActualizado);

  response.send(usuarioActualizado);
};

export const del = (request, response) => {
  const id = Number(request.params.id);
  const index = getIndex(id, usuarios);
  const usuario = usuarios.splice(index, 1);

  response.send(usuario);
};
