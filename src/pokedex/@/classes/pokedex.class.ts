import { PokedexMap } from '../interfaces/pokedex-map.interface';
import { PokedexPokemon } from "../../pokedex-pokemon/@/classes/pokedex-pokemon.class";
import { PokedexHttpPokemon } from "../interfaces/pokedex-http-pokemon.interface";


export class Pokedex implements PokedexMap {
  [key:string]: PokedexPokemon;

  constructor(pokemon: PokedexHttpPokemon[]) {
    pokemon.forEach((pokemon: PokedexHttpPokemon, i: number, array: Array<PokedexHttpPokemon>) =>
      this[i+1] = new PokedexPokemon(i+1, pokemon.name, pokemon.url));
  };
};