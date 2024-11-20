import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasComponent } from './despesas.component';

describe('DespesasComponent', () => {
  let component: DespesasComponent;
  let fixture: ComponentFixture<DespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespesasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve adicionar uma despesa', () => {
    component.descricao = 'Teste';
    component.valor = 100;
    component.onSubmit();
    expect(component.despesas.length).toBe(1);
  })
});
