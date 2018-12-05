import { 
  HttpClient
} from '@angular/common/http';

import {
  State,
  Store
} from '@ngxs/store';

@State<{}>({
  name: 'pokemon'
})
export class PokedexPokemonState {
  

  constructor (private http: HttpClient, private store: Store) {
  };
};