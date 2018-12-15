import { Component, Input, OnInit } from '@angular/core';
import { PokedexPokemonTypes } from '@pokedex/pokedex-pokemon';

@Component({
  selector: 'pokedex-types',
  templateUrl: './pokedex-types.component.html',
  styleUrls: ['./pokedex-types.component.scss']
})
export class PokedexTypesComponent implements OnInit {

  @Input()
  public types: PokedexPokemonTypes;

  constructor() { }

  ngOnInit() {
  }

}
