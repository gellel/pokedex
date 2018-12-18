import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonSpecies, PokedexPokemonName, PokedexPokemonSpeciesEvolutionChain, PokedexPokemonService } from '@pokedex/pokedex-pokemon';
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

  constructor(private http: HttpClient, private store: Store, private pokemonService: PokedexPokemonService) { }

  ngOnInit() {

    this.pokemonService.attemptPokedexSpeciesRequest(this.pokemon).toPromise()
      .then(() => this.pokemonService.attemptPokedexEvolutionChainRequest(this.pokemon));

  };


};
