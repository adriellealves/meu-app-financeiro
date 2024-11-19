import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespesaService } from './despesa.service';
import { DespesasComponent } from './despesas.component';
import { Despesa } from './despesa.model';
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
});
