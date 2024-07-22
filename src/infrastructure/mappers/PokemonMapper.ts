import type { Pokemon } from '../../domain/entities/Pokemon';
import type { PokeAPIPokemon } from '../interfaces/pokepi.interfaces';

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export class PokemonMapper {
  static async pokeApiPokemonToEntity(data: PokeAPIPokemon): Promise<Pokemon> {
    const sprites = PokemonMapper.getSprites(data);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    const description = await PokemonMapper.getDescription(data.species.url);
    const color = getRandomColor();

    console.log('Mapping Pokemon data:', data);

    return {
      id: data.id,
      name: data.name,
      avatar: avatar,
      sprites: sprites,
      types: data.types.map(type => type.type.name),
      weight: data.weight / 10,
      height: data.height / 10,
      abilities: data.abilities.map(ability => ability.ability.name),
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
      color: color,
      description: description,
    };
  }

  static getSprites(data: PokeAPIPokemon): string[] {
    const sprites: string[] = [
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny,
    ];

    if (data.sprites.other?.home.front_default)
      sprites.push(data.sprites.other?.home.front_default);
    if (data.sprites.other?.['official-artwork'].front_default)
      sprites.push(data.sprites.other?.['official-artwork'].front_default);
    if (data.sprites.other?.['official-artwork'].front_shiny)
      sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
    if (data.sprites.other?.showdown.front_default)
      sprites.push(data.sprites.other?.showdown.front_default);
    if (data.sprites.other?.showdown.back_default)
      sprites.push(data.sprites.other?.showdown.back_default);

    return sprites;
  }

  static async getDescription(url: string): Promise<string> {
    const response = await fetch(url);
    const data = await response.json();
    const descriptionEntry = data.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'en'
    );
    return descriptionEntry ? descriptionEntry.flavor_text : 'No description available.';
  }
}
