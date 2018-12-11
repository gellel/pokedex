import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { PokedexCardComponent } from './pokedex-card.component';
import { PokedexEvolutionsModule } from '../pokedex-evolutions'
import { PokedexGlyphModule } from '../pokedex-glyph';

@NgModule({
  declarations: [
    PokedexCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexEvolutionsModule,
    PokedexGlyphModule,
    RouterModule
  ],
  providers: [],
  exports: [PokedexCardComponent]
})
export class PokedexCardModule { };
