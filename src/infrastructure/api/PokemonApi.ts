import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonMapper } from '../mappers/PokemonMapper';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<any, void>({
      query: () => 'pokemon?limit=1000',
    }),
    getPokemonDetails: builder.query<any, string | number>({
      query: (identifier) => `pokemon/${identifier}`,
      transformResponse: async (response: any) => {
        const pokemon = await PokemonMapper.pokeApiPokemonToEntity(response);
        return pokemon;
      },
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;