/**
 * @typedef MockPokemon
 * @property {number} id
 * @property {string} name
 * @property {{ front_default: string }} sprites
 */

/**
 * @param {number} id numéro supérieur à zéro.
 * @returns {MockPokemon}
 */
export function createMockPokemon(id) {
  return {
    id: id,
    name: "mock-pokemon",
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    },
  };
}
