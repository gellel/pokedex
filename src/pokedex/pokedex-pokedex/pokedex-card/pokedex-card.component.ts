import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonSpecies, PokedexPokemonName } from '@pokedex/pokedex-pokemon';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { map, tap } from 'rxjs/operators';
import { Pokedex } from '@pokedex/@/classes';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  //public names: PokedexCardNames;

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    
    this.attemptPokedexSpeciesRequest().toPromise().then(()=>{
      console.log(this.pokemon.names)
    })
    
  };

  attemptPokedexSpeciesRequest() : Observable<any> {
    return of(this.http.get(this.pokemon.species['url'], { observe: 'response' }).toPromise()
    .then((response: HttpResponse<PokedexPokemonSpecies>) => this.onPokedexSpeciesResolve(response))
      .catch((error: HttpErrorResponse) => this.onPokedexSpeciesReject(error)));
  };

  attemptPokedexEvolutionChainRequest() : Observable<boolean> {
    return of(true);
    //return of(this.http.get(this.pokemon.species.evolution_chain.));
  };

  onPokdexEvolutionChainReject(error: HttpErrorResponse) : void {
    
  };

  onPokedexEvolutionChainResolve(response: any) : void {

  };

  onPokedexEvolutionChainFinally() : void {

  };

  onPokedexSpeciesReject(error: HttpErrorResponse) : void {
    console.error(error);
  };

  onPokedexSpeciesResolve(response: HttpResponse<PokedexPokemonSpecies>) : void {
    this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => 
      this.onPokedexSpeciesFinally(Object.assign(pokedex[this.pokemon.name].species, { http$: response, }, response.body)));
  };

  onPokedexSpeciesFinally(pokemonSpecies?: PokedexPokemonSpecies) : void {
    this.parsePokemonNames(pokemonSpecies.names);
  };

  parsePokemonNames(names: Array<PokedexPokemonName>) : void {
    this.pokemon.names = {};
    names.forEach((name: PokedexPokemonName) => {
      this.pokemon.names[name.language.name] = name;
    });

    console.log(this.pokemon)
  };
}
