import { useState } from "react";
import Card from "./components/Card";
import { createMockPokemon } from "./utils";
import Title from "./components/Title";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

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

    setPokemons((previousPokemons) => [
      createMockPokemon(pokemonId),
      ...previousPokemons,
    ]);
  };

  const handleOnDelete = (pokemonId) => {
    setPokemons((previousPokemons) =>
      previousPokemons.filter((p) => p.id !== pokemonId)
    );
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
