import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexGlyphComponent } from './pokedex-glyph.component';

describe('PokedexGlyphComponent', () => {
  let component: PokedexGlyphComponent;
  let fixture: ComponentFixture<PokedexGlyphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexGlyphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
