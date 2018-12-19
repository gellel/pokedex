import { Component, OnInit } from '@angular/core';
import { PokedexPokemon } from '../@';
import { Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Pokedex } from '@pokedex/@/classes';

@Component({
  selector: 'pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {

  public pokemon: PokedexPokemon;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.selectOnce(PokedexState.names$).toPromise().then((pokedex: Pokedex) => console.log(pokedex))
  }

}
