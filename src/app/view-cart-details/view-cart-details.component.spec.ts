import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartDetailsComponent } from './view-cart-details.component';

describe('ViewCartDetailsComponent', () => {
  let component: ViewCartDetailsComponent;
  let fixture: ComponentFixture<ViewCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCartDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
