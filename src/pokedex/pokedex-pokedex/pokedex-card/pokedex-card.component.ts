import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonService } from '@pokedex/pokedex-pokemon';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor(
    private pokemonService: PokedexPokemonService) { }

  ngOnInit() {

    this.pokemonService.attemptPokedexSpeciesRequest(this.pokemon).toPromise()
      .then(() => this.pokemonService.attemptPokedexEvolutionChainRequest(this.pokemon));
  };
};
