import axios from "axios";
import { Pokemon } from "common/interfaces/pokemon";
import { PokemonBaseResponse } from "common/interfaces/pokemon-base-response";
import { PokemonResponse } from "common/interfaces/pokemon-response";
import { ApiError } from "next/dist/server/api-utils";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonsResources(
  offset: number
): Promise<PokemonBaseResponse> {
  try {
    const response = await axios.get<PokemonBaseResponse>(API_URL, {
      params: {
        limit: 16,
        offset: offset * 16,
      },
    });

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
}

export async function getPokemonsList(
  offset: number
): Promise<PokemonResponse> {
  try {
    const pokemonsResources = await getPokemonsResources(offset);
    const pokemons: Pokemon[] = [];

    await Promise.all(
      pokemonsResources.results.map(async (pokemonResource) => {
        try {
          const response = await axios.get<Pokemon>(pokemonResource.url);
          pokemons.push(response.data);
        } catch (error: any) {
          console.log(error);
        }
      })
    );

    return {
      pokemons: pokemons,
      totalPages: Math.round(pokemonsResources.count / 16),
    };
  } catch (error: any) {
    console.log(error);
    throw new ApiError(500, error);
  }
}

export async function getPokemonDetail(pokemonName: string): Promise<Pokemon> {
  try {
    const response = await axios.get<Pokemon>(`${API_URL}/${pokemonName}`);

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new ApiError(500, error);
  }
}
