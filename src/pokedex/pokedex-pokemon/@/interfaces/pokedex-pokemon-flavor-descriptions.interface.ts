export interface PokedexPokemonFlavorDescriptions {
  [language:string]: {
    [version: string]: {
      description?: string;
    };
  };
};