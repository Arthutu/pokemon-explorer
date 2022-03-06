import { NameAPIResource } from "./name-api-resource";
import { PokemonAbility } from "./pokemon-ability";
import { PokemonMove } from "./pokemon-move";
import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStat } from "./pokemon-stat";
import { PokemonType } from "./pokemon-types";

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  species: NameAPIResource;
  types: PokemonType[];
}
