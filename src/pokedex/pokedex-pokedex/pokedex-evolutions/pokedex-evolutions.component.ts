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
  public evolutions: Array<PokedexPokemonEvolutionChain>;

  constructor(private store: Store) { }

  ngOnChanges(changes: SimpleChanges) : void {
    if((!changes.evolutions.firstChange) && (changes.evolutions.currentValue instanceof Array)) {
      this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => {
        changes.evolutions.currentValue.forEach((evolution: PokedexPokemonEvolutionChain) => {
          console.log(pokedex[evolution.species.name].$http)
        });
      });
    }
  }

  ngOnInit() : void {}

}
