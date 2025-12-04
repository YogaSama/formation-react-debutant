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
            <img
              alt="pokemon"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            />
            <div>#1 mock-pokemon</div>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </>
  );
}
