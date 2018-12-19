import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonLocationComponent } from './pokemon-location.component';

@NgModule({
  declarations: [
    PokemonLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonLocationComponent
  ]
})
export class PokemonLocationModule { }
