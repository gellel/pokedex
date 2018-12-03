import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { PokedexCardComponent } from './pokedex-card.component';

@NgModule({
  declarations: [
    PokedexCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ]),
    RouterModule
  ],
  providers: [],
  exports: [PokedexCardComponent]
})
export class PokedexCardModule { };
