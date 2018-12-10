import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonSpecies, PokedexPokemonName, PokedexPokemonSpeciesEvolutionChain } from '@pokedex/pokedex-pokemon';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { map, tap } from 'rxjs/operators';
import { Pokedex } from '@pokedex/@/classes';
import { Observable, of } from 'rxjs';
import { PokedexPokemonEvolutionBase } from '@pokedex/pokedex-pokemon/@/interfaces/pokedex-pokemon-evolution-base.interface';

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
      this.attemptPokedexEvolutionChainRequest().toPromise().then(()=>{});
    })
    
  };

  attemptPokedexSpeciesRequest() : Observable<any> {
    return of(this.http.get(this.pokemon.species['url'], { observe: 'response' }).toPromise()
    .then((response: HttpResponse<PokedexPokemonSpecies>) => this.onPokedexSpeciesResolve(response))
      .catch((error: HttpErrorResponse) => this.onPokedexSpeciesReject(error)));
  };

  attemptPokedexEvolutionChainRequest() : Observable<any> {
    return of(this.http.get(this.pokemon.species.evolution_chain.url, { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonEvolutionBase>) => this.onPokedexEvolutionChainResolve(response))
        .catch((error: HttpErrorResponse) => this.onPokdexEvolutionChainReject(error)));
  };

  onPokdexEvolutionChainReject(error: HttpErrorResponse) : void {
    
  };

  onPokedexEvolutionChainResolve(response: HttpResponse<PokedexPokemonEvolutionBase>) : void {
    this.pokemon.addPokemonEvolutions(response);

    
  };

  onPokedexSpeciesReject(error: HttpErrorResponse) : void {
    console.error(error);
  };

  onPokedexSpeciesResolve(response: HttpResponse<PokedexPokemonSpecies>) : void {
    this.pokemon.addPokemonSpecies(response);
  };
};
