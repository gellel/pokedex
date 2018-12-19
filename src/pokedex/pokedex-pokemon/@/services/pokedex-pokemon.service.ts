import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store, Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { PokedexState } from '@pokedex/pokedex.state';
import { PokedexPokemon } from '../classes';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexPokemonHttp, PokedexPokemonSpecies, PokedexPokemonSpeciesEvolutionChain } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexPokemonService {

  attemptPokedexBaseRequest(pokemon: PokedexPokemon) : (Observable<PokedexPokemon>|any) {
    if (pokemon.$http instanceof Object)
      return of(pokemon);
    
    return of(this.http.get(pokemon.url, { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonHttp>) => this.onPokedexBaseResolve(response, pokemon))
        .catch((error: HttpErrorResponse) => this.onPokedexBaseReject(error, pokemon)));
  };

  attempPokedexLocationRequest(pokemon: PokedexPokemon) : (Observable<PokedexPokemon>|any) {
    this.http.get(pokemon.location_area_encounters, { observe: 'response' }).toPromise()
      .then((response) => { console.log(response)})
        .catch((error: HttpErrorResponse) => {});
  };

  attemptPokedexSpeciesRequest(pokemon: PokedexPokemon) : (Observable<PokedexPokemon>|any) {
    if (pokemon.species.$http instanceof Object)
      return of(pokemon);

    return (of(this.http.get(pokemon.species.url, { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonSpecies>) => this.onPokedexSpeciesResolve(response, pokemon))
        .catch((error: HttpErrorResponse) => this.onPokedexSpeciesReject(error, pokemon))));
  };

  attemptPokedexEvolutionChainRequest(pokemon: PokedexPokemon, pokedex?: Pokedex) : (Observable<PokedexPokemon>|any) {
    if (pokemon.species.evolution_chain.$http instanceof Object)
      return of(pokemon);
    
    return of(this.http.get(pokemon.species.evolution_chain.url, { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonSpeciesEvolutionChain>) => this.onPokedexEvolutionChainResolve(response, pokemon))
        .catch((error: HttpErrorResponse) => this.onPokdexEvolutionChainReject(error, pokemon)));
  };

  private onPokedexBaseReject(error: HttpErrorResponse, pokemon: PokedexPokemon) : any {
    return console.error(error);
  };

  private onPokedexBaseResolve(response: HttpResponse<PokedexPokemonHttp>, pokemon: PokedexPokemon) : PokedexPokemon {
    return pokemon.addPokemonBase(response);
  };

  private onPokdexEvolutionChainReject(error: HttpErrorResponse, pokemon: PokedexPokemon) : void {
    return console.error(error);
  };

  private onPokedexEvolutionChainResolve(response: HttpResponse<PokedexPokemonSpeciesEvolutionChain>, pokemon: PokedexPokemon) : PokedexPokemon {
    return pokemon.addPokemonEvolutionChain(response);
  };

  private onPokedexSpeciesReject(error: HttpErrorResponse, pokemon: PokedexPokemon) : any {
    return console.error(error);
  };

  private onPokedexSpeciesResolve(response: HttpResponse<PokedexPokemonSpecies>, pokemon: PokedexPokemon) : PokedexPokemon {
    return pokemon.addPokemonSpecies(response);
  };

  constructor(
    private http: HttpClient,
    private store: Store) {};
};
