import { PokedexStateModel } from "@pokedex/@/interfaces";

export class PokedexGetPokedex {
  public static readonly type: string = '[PokedexState] PokedexGetPokedex';

  public constructor(public payload: PokedexStateModel) {};
};