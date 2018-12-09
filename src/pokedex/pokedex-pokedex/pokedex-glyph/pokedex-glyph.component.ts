import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Store, Select } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { PokedexPokemon, PokedexPokemonSprites } from '@pokedex/pokedex-pokemon';

@Component({
  selector: 'pokedex-glyph',
  templateUrl: './pokedex-glyph.component.html',
  styleUrls: ['./pokedex-glyph.component.scss']
})
export class PokedexGlyphComponent implements OnChanges, OnInit {
  
  @Input()
  id: number;

  @Input()
  link?: boolean = true;

  @Input()
  more?: boolean = false;

  @Input()
  name: string;
  
  @Input()
  sprites: PokedexPokemonSprites;

  constructor(
      private http: HttpClient,
      private store: Store) { };
  
  ngOnChanges() {
  };

  ngOnInit() {
  };
};
