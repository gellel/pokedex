import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokedex } from '@pokedex/@/classes';
import { PokedexPokemon } from './@';

@Component({
  selector: 'pokedex-pokemon',
  templateUrl: './pokedex-pokemon.component.html',
  styleUrls: ['./pokedex-pokemon.component.scss']
})
export class PokedexPokemonComponent implements OnDestroy, OnInit {

  @Select(PokedexState.names$)
  private names$ : Observable<Pokedex>;

  private readonly subscriptions: Subscription[] = [];

  public pokemon: PokedexPokemon;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnDestroy() {

  }

  ngOnInit() {

    this.names$.subscribe((pokedex: Pokedex) => 
      console.log(this.pokemon = pokedex[this.activatedRoute.snapshot.paramMap.get('id')]));
  }

}
