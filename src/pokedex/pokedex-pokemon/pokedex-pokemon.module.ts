import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokemonComponent } from './pokedex-pokemon.component';

@NgModule({
  declarations: [
    PokedexPokemonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ])
  ],
  providers: [],
  exports: [PokedexPokemonComponent]
})
export class PokedexPokemonModule { };
