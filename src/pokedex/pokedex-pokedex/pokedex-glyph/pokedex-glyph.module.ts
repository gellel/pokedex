import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PokedexGlyphComponent } from './pokedex-glyph.component';

@NgModule({
  declarations: [
    PokedexGlyphComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      
    ])
  ],
  providers: [],
  exports: [PokedexGlyphComponent]
})
export class PokedexGlyphModule { };
