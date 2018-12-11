import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexEvolutionsComponent } from './pokedex-evolutions.component';

describe('PokedexEvolutionsComponent', () => {
  let component: PokedexEvolutionsComponent;
  let fixture: ComponentFixture<PokedexEvolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexEvolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexEvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
