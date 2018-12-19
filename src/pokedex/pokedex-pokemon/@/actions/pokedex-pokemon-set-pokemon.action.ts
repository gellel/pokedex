import { PokedexPokemon } from '../classes';

export class PokedexPokemonSetPokemon {
    public static readonly type : string = '[PokedexPokemonState] PokedexPokemonSetPokemon';
    
    constructor(public payload: {
      pokemon: PokedexPokemon;
    }) {};
  };