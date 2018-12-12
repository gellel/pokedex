import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PokedexPokemonEvolutionChain, PokedexPokemon } from '@pokedex/pokedex-pokemon';
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

  @Input()
  public evolutions: {[key:string]: PokedexPokemon};

  @Input()
  public name: string;

  public pokemon: Array<PokedexPokemon>;

  constructor(private store: Store) { }

  ngOnChanges(changes: SimpleChanges) : void {
    if((!changes.evolutionChain.firstChange) && (changes.evolutionChain.currentValue instanceof Array)) {
      this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => {
        changes.evolutionChain.currentValue.forEach((evolution: PokedexPokemonEvolutionChain) => {
          if(pokedex[evolution.species.name].$http) {
            pokedex[this.name].evolutions[evolution.species.name] = pokedex[evolution.species.name];
            console.log('doesn\'t need to fetch', evolution.species.name);
          }
        });
      });
    }
    console.log(changes.evolutions)
  }

  ngOnInit() : void {}

  private onEvolutionChainChanges(changes: SimpleChanges) : void {};

  private onEvolutionChanges(changes: SimpleChanges) : void {};

}
