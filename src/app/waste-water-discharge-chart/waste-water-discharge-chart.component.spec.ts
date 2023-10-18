import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteWaterDischargeChartComponent } from './waste-water-discharge-chart.component';

describe('WasteWaterDischargeChartComponent', () => {
  let component: WasteWaterDischargeChartComponent;
  let fixture: ComponentFixture<WasteWaterDischargeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteWaterDischargeChartComponent]
    });
    fixture = TestBed.createComponent(WasteWaterDischargeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
