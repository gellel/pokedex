import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPokemonComponent } from '@pokedex/pokedex-pokemon/pokedex-pokemon.component';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';

const routes: Routes = [
  {
    children: [
      {
        component: PokemonOverviewComponent,
        path: 'overview'
      }
    ],
    component: PokedexPokemonComponent,
    path: ''
  }
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
