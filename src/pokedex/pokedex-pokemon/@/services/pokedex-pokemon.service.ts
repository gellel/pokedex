import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store, Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { PokedexState } from '@pokedex/pokedex.state';
import { PokedexPokemon } from '../classes';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexPokemonHttp } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexPokemonService {

  attemptPokedexBaseRequest(pokemon: PokedexPokemon) : any {
    if (pokemon.$http instanceof Object)
      return of(pokemon);
    
    return of(this.http.get(pokemon.url, { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonHttp>) => this.onPokedexBaseResolve(response, pokemon))
        .catch((error: HttpErrorResponse) => this.onPokedexBaseReject(error, pokemon)));
  };

  private onPokedexBaseReject(error: HttpErrorResponse, pokemon: PokedexPokemon) : any {
    return console.error(error);
  };

  private onPokedexBaseResolve(response: HttpResponse<PokedexPokemonHttp>, pokemon: PokedexPokemon) : PokedexPokemon {
    return pokemon.addPokemonBase(response);
  };

  constructor(
    private http: HttpClient,
    private store: Store) {};
};
