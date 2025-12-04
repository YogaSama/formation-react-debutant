import Card from "./components/Card";
import { createMockPokemon } from "../utils";
import Title from "./components/Title";

const pokemon = createMockPokemon(1);

export default function App() {
  return (
    <>
      <Title>Pokemon Search</Title>
      <form>
        <input name="pokemonId" />
      </form>
      <ul>
        <li>
          <Card pokemon={pokemon} />
        </li>
      </ul>
    </>
  );
}
