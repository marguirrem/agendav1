import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeDetallesComponent } from './sede-detalles.component';

describe('SedeDetallesComponent', () => {
  let component: SedeDetallesComponent;
  let fixture: ComponentFixture<SedeDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedeDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedeDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
