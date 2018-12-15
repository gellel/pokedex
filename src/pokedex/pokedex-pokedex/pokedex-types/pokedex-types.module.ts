import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexTypesComponent } from './pokedex-types.component';

@NgModule({
  declarations: [
    PokedexTypesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexTypesComponent
  ]
})
export class PokedexTypesModule { }
