import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonService } from '../@';

@Component({
  selector: 'pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor(private pokemonService: PokedexPokemonService) { }

  ngOnInit() {
  }

}
