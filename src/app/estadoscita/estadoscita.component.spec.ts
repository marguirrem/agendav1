import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoscitaComponent } from './estadoscita.component';

describe('EstadoscitaComponent', () => {
  let component: EstadoscitaComponent;
  let fixture: ComponentFixture<EstadoscitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoscitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoscitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
