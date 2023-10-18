import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAccountingComponent } from './water-accounting.component';

describe('WaterAccountingComponent', () => {
  let component: WaterAccountingComponent;
  let fixture: ComponentFixture<WaterAccountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterAccountingComponent]
    });
    fixture = TestBed.createComponent(WaterAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
