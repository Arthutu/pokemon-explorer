import { Pokemon } from "common/interfaces/pokemon";
import ErrorComponent from "components/error";
import Header from "components/header";
import PokemonDetail from "components/pokemon-detail";
import PokemonGrid from "components/pokemon-grid";
import SearchBar from "components/search-bar";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { getPokemonDetail } from "./api/pokemon";

const Home: NextPage = (): JSX.Element => {
  const [showPokemonGrid, setShowPokemonGrid] = useState<boolean>(true);
  const [showErrorComponent, setShowErrorComponent] = useState<boolean>(false);
  const [detailedPokemon, setDetailedPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnPokemonClick = (pokemon: Pokemon): void => {
    setShowPokemonGrid(false);
    setDetailedPokemon(pokemon);
  };

  const searchPokemon = async (searchValue: string): Promise<void> => {
    try {
      const pokemonsDetails = await getPokemonDetail(searchValue);
      setShowPokemonGrid(false);
      setIsLoading(false);
      setDetailedPokemon(pokemonsDetails);
    } catch (error) {
      setIsLoading(false);
      setShowErrorComponent(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pokemon Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="m-4 flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        {!showErrorComponent && (
          <SearchBar
            searchPokemon={searchPokemon}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
        {showPokemonGrid && !showErrorComponent && (
          <PokemonGrid handleOnPokemonClick={handleOnPokemonClick} />
        )}
        {!showPokemonGrid && !showErrorComponent && (
          <PokemonDetail
            pokemon={detailedPokemon}
            setShowPokemonGrid={setShowPokemonGrid}
          />
        )}

        {showErrorComponent && (
          <ErrorComponent setShowErrorComponent={setShowErrorComponent} />
        )}
      </main>
    </div>
  );
};

export default Home;
