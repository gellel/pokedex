import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PokedexState } from '../pokedex.state';
import { Observable } from 'rxjs';
import { PokedexPokemon, PokedexPokemonHttp } from '../pokedex-pokemon';
import { HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PokedexSetTo } from '@pokedex/@/actions';

@Component({
  selector: 'pokedex-pokedex',
  templateUrl: './pokedex-pokedex.component.html',
  styleUrls: ['./pokedex-pokedex.component.scss']
})
export class PokedexPokedexComponent implements OnInit {

  @Select(PokedexState.pokemon$)
  public pokemon$: Observable<PokedexPokemon[]>;


  private onGetPokemonSuccess(response: HttpResponse<PokedexPokemonHttp>, pokemon$: PokedexPokemon) : void {
    pokemon$.addPokemonBase(response);
  };

  private onGetPokemonError(error: HttpErrorResponse, pokemon$: PokedexPokemon) : void {
    console.error(error);
  };

  constructor(
      private http: HttpClient,
      private store: Store) {};
  

  ngOnInit() {
    this.pokemon$.subscribe(pokemon$ => pokemon$.forEach(pokemon$ => {
      if (!pokemon$.$http) {
        this.http.get(pokemon$.url, {observe: 'response'}).toPromise()
          .then((HttpResponseBase: HttpResponse<PokedexPokemonHttp>) => {
            this.onGetPokemonSuccess(HttpResponseBase, pokemon$);
          })
          .catch((httpErrorResponse: HttpErrorResponse) => {
            this.onGetPokemonError(httpErrorResponse, pokemon$);
          });
      };
    }));
  };

  onGetMorePokemon() : void {
    this.store.dispatch(new PokedexSetTo({
      to: 10
    }))
  };
};
