import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokemonComponent } from './pokedex-pokemon.component';
import { PokedexPokemonRouteModule } from './pokedex-pokemon.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokedexPokemonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexPokemonRouteModule,
    RouterModule
  ],
  providers: [],
  exports: [PokedexPokemonComponent]
})
export class PokedexPokemonModule { };
