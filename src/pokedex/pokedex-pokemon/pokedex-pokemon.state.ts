import {
  Store, State
} from '@ngxs/store';
import { HttpClient } from '@angular/common/http';


@State<{}>({
  name: 'pokemon'
})
export class PokedexPokemonState {
  

  constructor (private http: HttpClient, private store: Store) {
  };
};