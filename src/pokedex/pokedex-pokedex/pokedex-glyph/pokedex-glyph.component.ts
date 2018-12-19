import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokedexPokemon } from '@pokedex/pokedex-pokemon';

@Component({
  selector: 'pokedex-glyph',
  templateUrl: './pokedex-glyph.component.html',
  styleUrls: ['./pokedex-glyph.component.scss']
})
export class PokedexGlyphComponent implements OnChanges, OnInit {

  @Input()
  link?: boolean = true;

  @Input()
  more?: boolean = false;

  @Input()
  public pokemon: PokedexPokemon;

  constructor() { };
  
  ngOnChanges() {
  };

  ngOnInit() {
  };
};
