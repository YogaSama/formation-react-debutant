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

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @param {number} ms
 * @returns {() => T}
 * @template {T}
 */
export function delay(ms) {
  return (value) => sleep(ms).then(() => value);
}
