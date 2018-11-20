import { HttpResponseBase } from "@angular/common/http";
import { PokedexPokemonHttp, PokedexPokemonSprites } from "../interfaces";

export class PokedexPokemon implements PokedexPokemonHttp {

  public abilities: object;
  public base_experience: number;
  public height: number;
  public id: number;
  public is_default: boolean;
  public forms: object;
  public game_indices: object;
  public held_items: object;
  public http$: HttpResponseBase;
  public location_area_encounters: string;
  public moves: object;
  public name: string;
  public order: number;
  public sprites: PokedexPokemonSprites;
  public species: object;
  public stats: object;
  public types: object;
  public url: string;
  public weight: number;

  constructor (
      id: number,
      name: string,
      url: string) {

    this.id = id;
    this.name = name;
    this.url = url;
  };
};