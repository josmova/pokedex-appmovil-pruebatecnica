import { PokemonMapper } from '../mappers/PokemonMapper';
import type { Pokemon } from '../../domain/entities/Pokemon';

export const fetchPokemonDetails = async (identifier: string | number): Promise<Pokemon> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    const data = await response.json();
    
    console.log('Pokemon API response:', data);

    if (!data) {
      throw new Error('Failed to fetch Pokemon details');
    }

    return PokemonMapper.pokeApiPokemonToEntity(data);
  } catch (error) {
    console.error('Error in fetchPokemonDetails:', error);
    throw error;
  }
};