import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokedexComponent } from './pokedex-pokedex.component';
import { PokedexGlyphModule } from './pokedex-glyph';
import { RouterModule } from '@angular/router';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';

@NgModule({
  declarations: [
    PokedexPokedexComponent,
    PokedexCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexGlyphModule,
    RouterModule
  ],
  providers: [],
  exports: [PokedexPokedexComponent]
})
export class PokedexPokedexModule { };
