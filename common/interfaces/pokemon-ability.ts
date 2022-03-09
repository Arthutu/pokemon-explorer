import { NameAPIResource } from "./name-api-resource";

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NameAPIResource;
}
