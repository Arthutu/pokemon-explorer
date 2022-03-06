import { firstLetterToUpper } from "common/helpers/string.helpers";
import { Pokemon } from "common/interfaces/pokemon";
import React, { Dispatch, useState } from "react";

interface Props {
  pokemon: Pokemon | undefined;
  setShowPokemonGrid: Dispatch<React.SetStateAction<boolean>>;
}

const PokemonDetail = ({ pokemon, setShowPokemonGrid }: Props): JSX.Element => {
  const [allMoves, setAllMoves] = useState<boolean>(false);

  return (
    <div className="m-2 rounded-lg border-2 border-solid bg-gray-50 p-5 shadow-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => setShowPokemonGrid(true)}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <div className="flex flex-row items-center justify-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          {`${pokemon?.name[0].toUpperCase()}${pokemon?.name.slice(1)}`}
        </h2>
        <img src={pokemon?.sprites.front_default} className="text-center" />
      </div>

      <div className="flex flex-row">
        <span className="pr-2 font-bold">Species:</span>
        <span>{firstLetterToUpper(pokemon?.species?.name)}</span>
      </div>

      <div className="flex flex-row">
        <span className="pr-2 font-bold">Types:</span>
        <div className="flex flex-col items-start">
          {pokemon?.types.map((type) => (
            <span>{firstLetterToUpper(type.type.name)}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-row">
        <span className="pr-2 font-bold">Weight:</span>
        <span>{pokemon?.weight}</span>
      </div>

      <div className="flex flex-row">
        <span className="pr-2 font-bold">Stats:</span>
        <div className="flex flex-col items-start">
          {pokemon?.stats.map((stat) => (
            <span>
              {firstLetterToUpper(stat.stat.name)}: {stat.base_stat}
            </span>
          ))}
        </div>
      </div>

      {pokemon?.moves && pokemon?.moves.length > 0 && (
        <div className="flex flex-row">
          <span className="pr-2 font-bold">Moves:</span>
          <div className="flex flex-col items-start">
            {allMoves
              ? pokemon?.moves.map((move) => (
                  <span>{firstLetterToUpper(move.move.name)}</span>
                ))
              : pokemon?.moves
                  .slice(0, 5)
                  .map((move) => (
                    <span>{firstLetterToUpper(move.move.name)}</span>
                  ))}

            {allMoves && pokemon?.moves.length > 5 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => setAllMoves(!allMoves)}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
            {!allMoves && pokemon?.moves.length > 5 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => setAllMoves(!allMoves)}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
