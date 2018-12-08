import { PokedexPokemonSpecies } from "./pokedex-pokemon-species.interface";

export interface PokedexPokemonEvolutionChain {
  evolution_details: Array<object>;
  evolves_to: Array<PokedexPokemonEvolutionChain>;
  is_baby: boolean;
  species: PokedexPokemonSpecies;
};