import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesServiceComponent } from './clientes-service.component';

describe('ClientesServiceComponent', () => {
  let component: ClientesServiceComponent;
  let fixture: ComponentFixture<ClientesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
