import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Observable } from 'rxjs';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexPokemon } from './@';
import { PokedexPokemonSetPokemon } from './@/actions';
import { PokedexStateModel } from '@pokedex/@/interfaces';

@Component({
  selector: 'pokedex-pokemon',
  templateUrl: './pokedex-pokemon.component.html',
  styleUrls: ['./pokedex-pokemon.component.scss']
})
export class PokedexPokemonComponent implements OnDestroy, OnInit {

  public pokemon: PokedexPokemon;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnDestroy() {

  }

  ngOnInit() {

    this.store.selectOnce(PokedexState).toPromise().then((pokedex: PokedexStateModel) => 
      this.store.dispatch(new PokedexPokemonSetPokemon({ pokemon: (this.pokemon = pokedex.names[this.activatedRoute.snapshot.paramMap.get('id')])  })));
  }

}
