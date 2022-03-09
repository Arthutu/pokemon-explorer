import { Pokemon } from "./pokemon";

export interface PokemonResponse {
  totalPages: number;
  pokemons: Pokemon[];
}
