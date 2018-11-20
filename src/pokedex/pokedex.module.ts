import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { PokedexPokedexModule } from './pokedex-pokedex';
import { PokedexState } from './pokedex.state';
import { PokedexRouteModule } from './pokedex.route';
import { PokedexComponent } from './pokedex.component';

@NgModule({
  declarations: [
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PokedexState
    ]),
    PokedexPokedexModule,
    PokedexRouteModule
  ],
  providers: [],
  bootstrap: [PokedexComponent]
})
export class PokedexModule {};
