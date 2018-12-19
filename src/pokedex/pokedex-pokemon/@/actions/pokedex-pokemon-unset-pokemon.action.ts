export class PokedexPokemonUnsetPokemon {
  public static readonly type : string = '[PokedexPokemonState] PokedexPokemonUnsetPokemon';
  
  constructor(public payload: {
    name?: string;
  }) {};
};