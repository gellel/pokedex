import { Pokedex } from '@pokedex/@/classes/pokedex.class';
import { PokedexPokemon } from '@pokedex/pokedex-pokemon';

export interface PokedexStateModel {
  count?: number;
  pokedex?: Pokedex;
  names?: Pokedex;
  pokemon?: PokedexPokemon[];
  from?: number;
  to?: number;
};