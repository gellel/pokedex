import { PokedexPokemonName } from "./pokedex-pokemon-name.interface";
import { PokedexPokemonEvolutionChain } from "./pokedex-pokemon-evolution-chain.interface";

export interface PokedexPokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: object;
  egg_groups: Array<object>;
  evolution_chain: object;
  evolve_from_species: PokedexPokemonEvolutionChain;
  flavor_text_entries: Array<object>;
  form_descriptions: Array<object>;
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<object>;
  generation: object;
  growth_rate: object;
  habitat: object;
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  name: string;
  names: Array<PokedexPokemonName>;
  pal_park_encounters: Array<object>;
  pokedex_numbers: Array<object>;
  shape: object;
  varieties: Array<object>;
};