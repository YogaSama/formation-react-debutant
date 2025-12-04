import { PokemonClient } from "pokenode-ts";

export const client = new PokemonClient({
  cacheOptions: { cachePredicate: () => false },
});
