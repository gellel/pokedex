import { PokedexStateModel } from "@pokedex/@/interfaces";

export class PokedexSetTo {
  public static readonly type: string = '[PokedexState] PokedexSetTo';

  public constructor(public payload: { to: number; }) {};
};