/**
 * @typedef {(pokemonId: number) => void} OnDeleteFunction
 */

/**
 * @typedef CardProps
 * @property {import("pokenode-ts").Pokemon} pokemon
 * @property {OnDeleteFunction} onDelete
 */

/**
 * @param {CardProps} props
 * @returns {React.ReactElement}
 */
export default function Card({ pokemon, onDelete }) {
  return (
    <div>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <div>
        #{pokemon.id} {pokemon.name}
      </div>
      <button onClick={() => onDelete(pokemon.id)}>Delete</button>
    </div>
  );
}
