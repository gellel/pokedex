import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon } from '../@';

@Component({
  selector: 'pokemon-statistics',
  templateUrl: './pokemon-statistics.component.html',
  styleUrls: ['./pokemon-statistics.component.scss']
})
export class PokemonStatisticsComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor() { }

  ngOnInit() {
  }

}
