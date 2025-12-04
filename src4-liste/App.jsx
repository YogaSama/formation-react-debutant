import Card from "./components/Card";
import { createMockPokemon } from "./utils";
import Title from "./components/Title";

const pokemons = [
  createMockPokemon(1),
  createMockPokemon(2),
  createMockPokemon(3),
  createMockPokemon(4),
  createMockPokemon(5),
];

export default function App() {
  return (
    <>
      <Title>Pokemon Search</Title>
      <form>
        <input name="pokemonId" />
      </form>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </>
  );
}
