import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPokedexComponent } from './pokedex-pokedex.component';

describe('PokedexPokedexComponent', () => {
  let component: PokedexPokedexComponent;
  let fixture: ComponentFixture<PokedexPokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexPokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
