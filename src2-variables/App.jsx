import { createMockPokemon } from "./utils";

const pokemon = createMockPokemon(1);

export default function App() {
  return (
    <>
      <h1>Pokemon Search</h1>
      <form>
        <input name="pokemonId" />
      </form>
      <ul>
        <li>
          <div>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <div>
              #{pokemon.id} {pokemon.name}
            </div>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </>
  );
}
