import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokedexComponent } from './pokedex-pokedex.component';
import { PokedexGlyphModule } from './pokedex-glyph';

@NgModule({
  declarations: [
    PokedexPokedexComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexGlyphModule
  ],
  providers: [],
  exports: [PokedexPokedexComponent]
})
export class PokedexPokedexModule { };
