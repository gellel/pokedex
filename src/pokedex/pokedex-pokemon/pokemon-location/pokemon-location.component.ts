import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemonService, PokedexPokemon } from '../@';

@Component({
  selector: 'pokemon-location',
  templateUrl: './pokemon-location.component.html',
  styleUrls: ['./pokemon-location.component.scss']
})
export class PokemonLocationComponent implements OnInit {


  constructor(
    private pokemonService: PokedexPokemonService
  ) { }

  ngOnInit() {
  }

}
