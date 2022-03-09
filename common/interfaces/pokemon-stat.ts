import { NameAPIResource } from "./name-api-resource";

export interface PokemonStat {
  stat: NameAPIResource;
  effort: 0 | 1 | 2 | 3;
  base_stat: number;
}
