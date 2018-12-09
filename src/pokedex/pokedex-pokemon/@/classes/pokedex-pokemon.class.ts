import { 
  HttpResponseBase,
  HttpResponse
} from "@angular/common/http";

import {
  PokedexPokemonHttp,
  PokedexPokemonSprites,
  PokedexPokemonName,
  PokedexPokemonNames,
  PokedexPokemonSpecies
} from "../interfaces";

import {
  Observable,
  of
} from "rxjs";


export class PokedexPokemon implements PokedexPokemonHttp {

  public $http: HttpResponse<PokedexPokemonHttp>;
  public abilities: object;
  public base_experience: number;
  public evolutions?: any;
  public height: number;
  public id: number;
  public is_default: boolean;
  public forms: object;
  public game_indices: object;
  public held_items: object;
  public http$: HttpResponse<PokedexPokemonHttp>;
  public location_area_encounters: string;
  public moves: object;
  public name: string;
  public names?: PokedexPokemonNames;
  public order: number;
  public sprites: PokedexPokemonSprites;
  public species: PokedexPokemonSpecies;
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
    this.names = {};
    this.url = url;
  };

  addPokemonBase(response: HttpResponse<PokedexPokemonHttp>) : void {
    Object.assign(this, { $http: response }, response.body);
  };

  addPokemonDescriptions() : void {};

  addPokemonEvolutions() : void {};

  addPokemonNames(names: Array<PokedexPokemonName>) : Observable<any> {
    return of(names.forEach((name: PokedexPokemonName) => 
      (this.names[name.language.name] = name)));
  };

  addPokemonSpecies(response: HttpResponse<PokedexPokemonSpecies>): void {
    this.species = Object.assign({ $http: response }, response.body);

    this.addPokemonNames(this.species.names);
  };
};