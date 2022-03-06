import { Pokemon } from "common/interfaces/pokemon";
import { getPokemonsList } from "pages/api/pokemon";
import { useState } from "react";
import ReactPaginate from "react-paginate";

interface Props {
  handleOnPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonGrid = ({ handleOnPokemonClick }: Props): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [totalPages, setTotalPages] = useState<number>(0);

  const handlePagination = async (selectedItem: {
    selected: number;
  }): Promise<void> => {
    const pokemonsList = await getPokemonsList(selectedItem.selected);
    setPokemons(pokemonsList.pokemons);
    setTotalPages(pokemonsList.totalPages);
  };

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-4">
        {pokemons &&
          pokemons?.map((pokemon, index) => (
            <div
              key={index}
              onClick={() => handleOnPokemonClick(pokemon)}
              className="m-2 flex w-full cursor-pointer flex-col items-center justify-center divide-y divide-red-400 rounded-lg border-2 border-solid bg-gray-50 p-5 shadow-xl">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}
              </h2>
              <img
                src={pokemon.sprites.front_default}
                className="text-center"
              />
            </div>
          ))}
      </div>

      {!pokemons && (
        <div className="flex  flex-col items-center justify-center">
          <img
            src="http://a.top4top.net/p_1990j031.gif"
            alt="Loading Pikachu"
          />
        </div>
      )}

      <ReactPaginate
        initialPage={0}
        pageCount={totalPages}
        onPageChange={handlePagination}
        containerClassName="flex flex-row"
        pageClassName="p-2"
        previousClassName="p-2"
        nextClassName="p-2"
        breakClassName="p-2"
        activeClassName="font-bold text-red-400"
      />
    </>
  );
};

export default PokemonGrid;
