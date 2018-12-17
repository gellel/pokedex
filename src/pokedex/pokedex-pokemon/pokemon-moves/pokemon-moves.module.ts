import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMovesComponent } from './pokemon-moves.component';

@NgModule({
  declarations: [
    PokemonMovesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonMovesComponent
  ]
})
export class PokemonMovesModule { }
