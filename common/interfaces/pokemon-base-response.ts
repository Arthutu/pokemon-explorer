import { NameAPIResource } from "./name-api-resource";

export interface PokemonBaseResponse {
  count: number;
  next: string;
  previous: string;
  results: NameAPIResource[];
}
