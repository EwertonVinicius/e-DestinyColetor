import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColetaComponent } from './lista-coleta.component';

describe('ListaColetaComponent', () => {
  let component: ListaColetaComponent;
  let fixture: ComponentFixture<ListaColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
