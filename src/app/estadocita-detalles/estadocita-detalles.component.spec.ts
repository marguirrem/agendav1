import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadocitaDetallesComponent } from './estadocita-detalles.component';

describe('EstadocitaDetallesComponent', () => {
  let component: EstadocitaDetallesComponent;
  let fixture: ComponentFixture<EstadocitaDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadocitaDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadocitaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
