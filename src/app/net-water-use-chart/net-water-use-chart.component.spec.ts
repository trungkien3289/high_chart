import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWaterUseChartComponent } from './net-water-use-chart.component';

describe('NetWaterUseChartComponent', () => {
  let component: NetWaterUseChartComponent;
  let fixture: ComponentFixture<NetWaterUseChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetWaterUseChartComponent]
    });
    fixture = TestBed.createComponent(NetWaterUseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
