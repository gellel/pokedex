import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexEvolutionsComponent } from './pokedex-evolutions.component';
import { PokedexGlyphModule } from '../pokedex-glyph';

@NgModule({
  declarations: [
    PokedexEvolutionsComponent
  ],
  imports: [
    CommonModule,
    PokedexGlyphModule
  ],
  exports: [
    PokedexEvolutionsComponent
  ]
})
export class PokedexEvolutionsModule { }
