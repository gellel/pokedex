import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokedexComponent } from './pokedex-pokedex.component';
import { PokedexCardModule } from './pokedex-card';
import { PokedexGlyphModule } from './pokedex-glyph';
import { PokedexTypesComponent } from './pokedex-types/pokedex-types.component';

@NgModule({
  declarations: [
    PokedexPokedexComponent,
    PokedexTypesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexCardModule,
    PokedexGlyphModule,
    RouterModule
  ],
  providers: [],
  exports: [PokedexPokedexComponent]
})
export class PokedexPokedexModule { };
