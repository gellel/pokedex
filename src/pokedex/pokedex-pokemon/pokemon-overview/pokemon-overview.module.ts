import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonOverviewComponent } from './pokemon-overview.component';
import { PokemonLocationModule } from '../pokemon-location';
import { PokemonMovesModule } from '../pokemon-moves';

@NgModule({
  declarations: [
    PokemonOverviewComponent
  ],
  imports: [
    CommonModule,
    PokemonLocationModule,
    PokemonMovesModule
  ],
  exports: [
    PokemonOverviewComponent
  ]
})
export class PokemonOverviewModule { }
