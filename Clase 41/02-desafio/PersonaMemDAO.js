class PersonaMemDao {
  constructor() {
    this.personas = [];
    this.fyh = null;
  }

  getNextId() {
    const { length } = this.personas;

    return length ? this.personas[length - 1].id + 1 : 1;
  }

  getIndex(id) {
    return this.personas.findIndex((persona) => persona.id === id);
  }

  getFyH() {
    this.fyh = new Date().toLocaleString();

    return this.fyh;
  }

  getAll() {
    return this.personas;
  }

  getById(idBuscado) {
    return this.personas[this.getIndex(idBuscado)];
  }

  add(personaNueva) {
    this.personas.push(personaNueva);

    return personaNueva;
  }

  deleteById(idParaBorrar) {
    const persona = this.personas.splice(this.getIndex(idParaBorrar), 1);

    return persona[0];
  }

  updateById(idParaReemplazar, nuevaPersona) {
    this.personas.splice(this.getIndex(idParaReemplazar), 1, nuevaPersona);

    return nuevaPersona;
  }
}

module.exports = PersonaMemDao;
