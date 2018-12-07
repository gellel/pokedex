import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonSpecies, PokedexPokemonName } from '@pokedex/pokedex-pokemon';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { map, tap } from 'rxjs/operators';
import { Pokedex } from '@pokedex/@/classes';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    this.http.get(this.pokemon.species['url'], { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonSpecies>) => this.onPokedexSpeciesResolve(response))
        .catch((error: HttpErrorResponse) => this.onPokedexSpeciesReject(error))
          .finally(() => console.log(this.pokemon));
  }

  onPokedexSpeciesReject(error: HttpErrorResponse) : void {
    console.error(error);
  };

  onPokedexSpeciesResolve(response: HttpResponse<PokedexPokemonSpecies>) : void {
    this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => 
      Object.assign(pokedex[this.pokemon.name].species, { http$: response, }, response.body));
  };

  onPokedexSpeciesFinally(pokedmonSpecies: PokedexPokemonSpecies) : void {
    this.parsePokemonNames(pokedmonSpecies.names);
  };

  parsePokemonNames(names: Array<PokedexPokemonName>) : void {

  };
}
