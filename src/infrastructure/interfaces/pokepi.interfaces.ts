export interface PokeAPIPaginatedResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface PokeAPIPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface Sprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other?: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Showdown {
  front_default: string;
  back_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
