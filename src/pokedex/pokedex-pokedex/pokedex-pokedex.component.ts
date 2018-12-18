import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PokedexState } from '../pokedex.state';
import { Observable } from 'rxjs';
import { PokedexPokemon, PokedexPokemonHttp, PokedexPokemonService } from '../pokedex-pokemon';
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
      private store: Store,
      private pokemonService: PokedexPokemonService) {};
  

  ngOnInit() {
    this.pokemon$.subscribe(pokemon$ => pokemon$.forEach(pokemon$ =>
      this.pokemonService.attemptPokedexBaseRequest(pokemon$)));
  };

  onGetMorePokemon() : void {
    this.store.dispatch(new PokedexSetTo({
      to: 10
    }))
  };
};
