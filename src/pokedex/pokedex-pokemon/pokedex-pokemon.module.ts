import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexPokemonComponent } from './pokedex-pokemon.component';
import { PokedexPokemonRouteModule } from './pokedex-pokemon.route';
import { RouterModule } from '@angular/router';
import { PokedexCardModule } from '@pokedex/pokedex-pokedex/pokedex-card';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { PokemonLocationComponent } from './pokemon-location/pokemon-location.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonStatisticsComponent } from './pokemon-statistics/pokemon-statistics.component';


@NgModule({
  declarations: [
    PokedexPokemonComponent,
    PokemonOverviewComponent,
    PokemonLocationComponent,
    PokemonMovesComponent,
    PokemonStatisticsComponent,
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
