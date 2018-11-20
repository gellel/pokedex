import { Pokedex } from '@pokedex/@/classes';
import { PokedexPokemon } from '@pokedex/pokedex-pokemon';

export interface PokedexStateModel {
  count?: number;
  pokedex?: Pokedex;
  pokemon?: PokedexPokemon[];
  from?: number;
  to?: number;
};