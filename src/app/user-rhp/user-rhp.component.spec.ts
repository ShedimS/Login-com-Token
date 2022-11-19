import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRHPComponent } from './user-rhp.component';

describe('UserRHPComponent', () => {
  let component: UserRHPComponent;
  let fixture: ComponentFixture<UserRHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRHPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
