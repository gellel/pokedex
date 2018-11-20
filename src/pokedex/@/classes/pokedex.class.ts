import { PokedexPokemon } from "../../pokedex-pokemon";
import { PokedexHttpPokemon } from "../interfaces";

export class Pokedex {
  [details:string]: PokedexPokemon;

  constructor(pokemon: PokedexHttpPokemon[]) {
    for (let i: number = 0, l: number = pokemon.length; i < l; i++) {
      this[i+1] = new PokedexPokemon(i+1, pokemon[i].name, pokemon[i].url);
    };
  };
};