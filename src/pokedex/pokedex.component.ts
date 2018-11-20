import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'pokedex-root',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  
  constructor (private store: Store) {};
};
