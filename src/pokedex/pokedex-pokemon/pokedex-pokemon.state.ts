import { 
  HttpClient
} from '@angular/common/http';

import {
  State,
  Store,
  Action,
  StateContext
} from '@ngxs/store';

import { 
  PokedexPokemon,
  PokedexPokemonStateModel
} from './@';

import { PokedexPokemonUnsetPokemon, PokedexPokemonSetPokemon } from './@/actions';

@State<PokedexPokemonStateModel>({
  name: 'pokemon',
  defaults: {
    pokemon: undefined
  }
})
export class PokedexPokemonState {

  @Action(PokedexPokemonSetPokemon)
  private pokedexPokemonSetPokemon({ getState, patchState }: StateContext<PokedexPokemonStateModel>, { payload }: PokedexPokemonSetPokemon) : void {
    patchState({
      pokemon: payload.pokemon
    });
  };
  
  @Action(PokedexPokemonUnsetPokemon)
  private pokedexPokemonUnsetPokemon({ getState, patchState }: StateContext<PokedexPokemonStateModel>, { payload }: PokedexPokemonUnsetPokemon) : void {
    patchState({
      pokemon: undefined
    });
  };


  constructor (private store: Store) {};
};