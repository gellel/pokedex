import { PokedexHttpPokemon } from './pokedex-http-pokemon.interface';

export interface PokedexHttpPokedex {
  count?: number;
  previous?: any;
  next?: any;
  results: PokedexHttpPokemon[];
};