import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarColetaComponent } from './gerenciar-coleta.component';

describe('GerenciarColetaComponent', () => {
  let component: GerenciarColetaComponent;
  let fixture: ComponentFixture<GerenciarColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
