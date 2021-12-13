import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpansionComponent } from './card-expansion.component';

describe('CardExpansionComponent', () => {
  let component: CardExpansionComponent;
  let fixture: ComponentFixture<CardExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
