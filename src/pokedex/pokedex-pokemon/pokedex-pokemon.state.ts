import { 
  HttpClient
} from '@angular/common/http';

import {
  State,
  Store,
  Action
} from '@ngxs/store';

import { 
  PokedexPokemon,
  PokedexPokemonStateModel
} from './@';

@State<PokedexPokemonStateModel>({
  name: 'pokemon'
})
export class PokedexPokemonState {
  
  private storeActivePokemon() {};

  private removeActivePokemon() {};

  constructor (private http: HttpClient, private store: Store) {
  };
};