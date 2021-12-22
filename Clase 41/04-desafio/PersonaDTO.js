const PersonaDTO = (persona, id, fyh) => ({
  id,
  fyh,
  ...persona,
});

module.exports = PersonaDTO;
