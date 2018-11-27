import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PokedexState } from '@pokedex/pokedex.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-pokemon',
  templateUrl: './pokedex-pokemon.component.html',
  styleUrls: ['./pokedex-pokemon.component.scss']
})
export class PokedexPokemonComponent implements OnInit {


  constructor(private activedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    console.log(this.activedRoute.snapshot)

    console.log(this.store.selectSnapshot(PokedexState))
  }

}
