/* // src/application/useCases/pokemons/GetPokemonDetails.ts
import { fetchPokemonDetails } from '../../../infrastructure/adapters/PokemonApiAdapter';
import type { Pokemon } from '../../../domain/entities/Pokemon';

export const GetPokemonDetails = async (identifier: string | number): Promise<Pokemon> => {
  console.log("identifier GetPokemonDetails",identifier);
  return await fetchPokemonDetails(identifier);
};
 */