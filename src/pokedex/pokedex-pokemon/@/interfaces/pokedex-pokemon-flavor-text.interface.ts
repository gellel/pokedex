import { PokedexPokemonLanguage } from "./pokedex-pokemon-language.interface";
import { PokedexPokemonVersion } from "./pokedex-pokemon-version.interface";

export interface PokedexPokemonFlavorText {
  flavor_text: string;
  language: PokedexPokemonLanguage;
  version: PokedexPokemonVersion;
};