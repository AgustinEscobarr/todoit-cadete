import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAlertComponent } from './sign-in-alert.component';

describe('SignInAlertComponent', () => {
  let component: SignInAlertComponent;
  let fixture: ComponentFixture<SignInAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
