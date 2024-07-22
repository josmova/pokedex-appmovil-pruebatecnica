export interface Pokemon {
  id: number;
  name: string;
  avatar: string;
  sprites: string[];
  types: string[];
  weight: number;
  height: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  color?: string;
  description: string; 
}
