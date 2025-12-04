/**
 * @typedef {(pokemonId: number) => void} OnDeleteFunction
 */

import { useContext } from "react";
import { ViewContext } from "../contexts/ViewContext";

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
  const view = useContext(ViewContext);
  return (
    <div>
      <img
        alt={pokemon.name}
        src={
          pokemon.sprites[view === "front" ? "front_default" : "back_default"]
        }
      />
      <div>
        #{pokemon.id} {pokemon.name}
      </div>
      <button onClick={() => onDelete(pokemon.id)}>Delete</button>
    </div>
  );
}
