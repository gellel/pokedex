import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon } from '@pokedex/pokedex-pokemon';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor() { }

  ngOnInit() {
  }

}
