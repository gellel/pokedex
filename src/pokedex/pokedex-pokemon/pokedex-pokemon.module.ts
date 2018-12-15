import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokemonComponent } from './pokedex-pokemon.component';
import { PokedexPokemonRouteModule } from './pokedex-pokemon.route';
import { RouterModule } from '@angular/router';
import { PokedexCardModule } from '@pokedex/pokedex-pokedex/pokedex-card';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';


@NgModule({
  declarations: [
    PokedexPokemonComponent,
    PokemonOverviewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    PokedexCardModule,
    PokedexPokemonRouteModule,
    RouterModule
  ],
  providers: [],
  exports: [PokedexPokemonComponent]
})
export class PokedexPokemonModule { };
