import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';

const extractIdFromUrl = (url: string): string | number | null => {
  const idMatch = url.match(/\/(\d+)\/$/);
  return idMatch ? idMatch[1] : null;
};

export const selectFilteredAndSortedPokemons = createSelector(
  (state: RootState) => state.pokemonApi.queries['getPokemonList(undefined)']?.data,
  (state: RootState) => state.search.searchTerm,
  (state: RootState) => state.search.sortOption,
  (data, search, sortOption) => {
    if (!data) return [];

    const filteredData = data.results
      .map((pokemon: any) => ({
        ...pokemon,
        id: extractIdFromUrl(pokemon.url),
        avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractIdFromUrl(pokemon.url)}.png`,
      }))
      .filter((pokemon: any) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a: any, b: any) => {
        if (sortOption === 'number') {
          return a.id - b.id;
        }
        return a.name.localeCompare(b.name);
      });

    return filteredData;
  }
);
