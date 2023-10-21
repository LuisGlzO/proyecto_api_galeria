import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadriculaPrincipalComponent } from './cuadricula-principal.component';

describe('CuadriculaPrincipalComponent', () => {
  let component: CuadriculaPrincipalComponent;
  let fixture: ComponentFixture<CuadriculaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadriculaPrincipalComponent]
    });
    fixture = TestBed.createComponent(CuadriculaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
