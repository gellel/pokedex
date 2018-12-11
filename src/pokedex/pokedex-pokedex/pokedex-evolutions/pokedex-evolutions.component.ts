import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PokedexPokemonEvolutionChain } from '@pokedex/pokedex-pokemon';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Pokedex } from '@pokedex/@/classes';

@Component({
  selector: 'pokedex-evolutions',
  templateUrl: './pokedex-evolutions.component.html',
  styleUrls: ['./pokedex-evolutions.component.scss']
})
export class PokedexEvolutionsComponent implements OnChanges, OnInit {

  @Input()
  public evolutionChain: Array<PokedexPokemonEvolutionChain>;

  constructor(private store: Store) { }

  ngOnChanges(changes: SimpleChanges) : void {
    if((!changes.evolutionChain.firstChange) && (changes.evolutionChain.currentValue instanceof Array)) {
      this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => {
        changes.evolutionChain.currentValue.forEach((evolution: PokedexPokemonEvolutionChain) => {
          if(pokedex[evolution.species.name].$http) {
            /// maybe i need to pass in the actual pokemon as well.
            console.log('doesn\'t need to fetch', evolution.species.name)
          }
        });
      });
    }
  }

  ngOnInit() : void {}

}
