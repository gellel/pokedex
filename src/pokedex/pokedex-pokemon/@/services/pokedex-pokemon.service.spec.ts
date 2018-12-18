import { TestBed } from '@angular/core/testing';

import { PokedexPokemonService } from './pokedex-pokemon.service';

describe('PokedexPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexPokemonService = TestBed.get(PokedexPokemonService);
    expect(service).toBeTruthy();
  });
});
