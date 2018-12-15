import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexTypesComponent } from './pokedex-types.component';

describe('PokedexTypesComponent', () => {
  let component: PokedexTypesComponent;
  let fixture: ComponentFixture<PokedexTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
