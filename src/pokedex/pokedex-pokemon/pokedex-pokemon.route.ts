import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPokemonComponent } from '@pokedex/pokedex-pokemon/pokedex-pokemon.component';

const routes: Routes = [
  {
    component: PokedexPokemonComponent,
    path: ''
  },
  /*{
    component:
    path: 'overview'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexPokemonRouteModule { }
