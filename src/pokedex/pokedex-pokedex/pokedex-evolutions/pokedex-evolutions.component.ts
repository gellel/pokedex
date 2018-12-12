import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PokedexPokemonEvolutionChain, PokedexPokemon } from '@pokedex/pokedex-pokemon';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexMap } from '@pokedex/@/interfaces';

@Component({
  selector: 'pokedex-evolutions',
  templateUrl: './pokedex-evolutions.component.html',
  styleUrls: ['./pokedex-evolutions.component.scss']
})
export class PokedexEvolutionsComponent implements OnChanges, OnInit {

  @Input()
  public evolutionChain: Array<PokedexPokemonEvolutionChain>;

  @Input()
  public evolutions: PokedexMap;

  @Input()
  public name: string;

  public pokedex: Array<PokedexPokemon>;

  constructor(private store: Store) { }

  ngOnChanges(changes: SimpleChanges) : void {

    if((!changes.evolutionChain.firstChange) && (changes.evolutionChain.currentValue instanceof Array)) {
      this.onEvolutionChainChanges(changes.evolutionChain.currentValue);
    }
  }

  ngOnInit() : void {}

  private onEvolutionChainChanges(evolutionChain: Array<PokedexPokemonEvolutionChain>) : void {
    this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => {
      evolutionChain.forEach((evolution: PokedexPokemonEvolutionChain) => {
        pokedex[this.name].addPokemonEvolution(pokedex[evolution.species.name]);
      });
      this.pokedex = Object.values(pokedex[this.name].evolutions);
    });
  };

  private onEvolutionChanges(evolutions: PokedexMap) : void {
  };
}
