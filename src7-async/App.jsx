import { useState } from "react";
import Card from "./components/Card";
import { client } from "./api/client";
import Title from "./components/Title";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
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

    if (!pokemonId) {
      return;
    }

    setLoading(true);
    setMessage(null);
    client.getPokemonById(pokemonId).then(
      (pokemon) => {
        setMessage(`'${pokemon.name}' added.`);
        setLoading(false);
        setPokemons((previousPokemons) => [
          pokemon,
          ...previousPokemons.filter((p) => p.id !== pokemon.id),
        ]);
      },
      (error) => {
        console.error(error);
        setMessage("An error occured.");
        setLoading(false);
      }
    );
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
        <input name="pokemonId" readOnly={loading} />{" "}
        {loading ? "Loading ..." : message}
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
