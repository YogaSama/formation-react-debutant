import Card from "./components/Card";
import { createMockPokemon } from "./utils";
import Title from "./components/Title";

let pokemons = [
  createMockPokemon(1),
  createMockPokemon(2),
  createMockPokemon(3),
  createMockPokemon(4),
  createMockPokemon(5),
];

export default function App() {
  /**
   * @type {React.FormEventHandler<HTMLFormElement>}
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const form = event.target;
    const data = new FormData(form);
    const pokemonId = data.get("pokemonId");

    if (!pokemonId) {
      return;
    }

    pokemons = [createMockPokemon(pokemonId), ...pokemons];
    console.log(pokemons);
  };

  const handleOnDelete = (pokemonId) => {
    pokemons = pokemons.filter((p) => p.id !== pokemonId);
    console.log(pokemons);
  };

  return (
    <>
      <Title>Pokemon Search</Title>
      <form onSubmit={handleSubmit}>
        <input name="pokemonId" />
      </form>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} onDelete={handleOnDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
