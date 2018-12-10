import { PokedexPokemonEvolutionChain } from "./pokedex-pokemon-evolution-chain.interface";
import { HttpResponse } from "@angular/common/http";

export interface PokedexPokemonSpeciesEvolutionChain {
  $http?: HttpResponse<PokedexPokemonEvolutionChain>;
  baby_trigger_item?: any;
  chain?: PokedexPokemonEvolutionChain;
  id?: number;
  url: string;
};