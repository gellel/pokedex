import { Component, OnInit, Input } from '@angular/core';
import { PokedexPokemon, PokedexPokemonSpecies } from '@pokedex/pokedex-pokemon';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';

@Component({
  selector: 'pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input()
  public pokemon: PokedexPokemon;

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    this.http.get(this.pokemon.species['url'], { observe: 'response' }).toPromise()
      .then((response: HttpResponse<PokedexPokemonSpecies>) => console.log(response.body)).catch((error: HttpErrorResponse) => {});
  }

}
