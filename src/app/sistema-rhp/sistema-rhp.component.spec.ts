import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaRHPComponent } from './sistema-rhp.component';

describe('SistemaRHPComponent', () => {
  let component: SistemaRHPComponent;
  let fixture: ComponentFixture<SistemaRHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaRHPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaRHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
