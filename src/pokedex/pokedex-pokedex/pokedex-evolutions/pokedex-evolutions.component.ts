import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PokedexPokemonEvolutionChain, PokedexPokemon, PokedexPokemonService } from '@pokedex/pokedex-pokemon';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexMap } from '@pokedex/@/interfaces';

@Component({
  selector: 'pokedex-evolutions',
  templateUrl: './pokedex-evolutions.component.html',
  styleUrls: ['./pokedex-evolutions.component.scss']
})
export class PokedexEvolutionsComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  public pokedex: Array<PokedexPokemon>;

  constructor(private pokemonService: PokedexPokemonService, private store: Store) { }


  ngOnInit() : void {
    this.pokemonService.attemptPokedexEvolutionChainRequest(this.pokemon).toPromise().then(() => {
      this.onEvolutionChainChanges(this.pokemon.evolutionChain)
    });
  }

  private onEvolutionChainChanges(evolutionChain: Array<PokedexPokemonEvolutionChain>) : void {
      evolutionChain.forEach((evolution: PokedexPokemonEvolutionChain) => {
        this.pokemon.addPokemonEvolution(this.pokemon.$names[evolution.species.name]);
      });
      this.pokedex = Object.values(this.pokemon.evolutions);
  };

}
