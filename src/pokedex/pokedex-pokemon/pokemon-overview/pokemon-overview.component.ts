import { Component, OnInit } from '@angular/core';
import { PokedexPokemon } from '../@';
import { Store } from '@ngxs/store';
import { PokedexPokemonState } from '../pokedex-pokemon.state';

@Component({
  selector: 'pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {

  public pokemon: PokedexPokemon;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(PokedexPokemonState).subscribe(
      (state) => (this.pokemon = state.pokemon));
  }

}
