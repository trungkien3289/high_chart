import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossWaterUseChartComponent } from './gross-water-use-chart.component';

describe('GrossWaterUseChartComponent', () => {
  let component: GrossWaterUseChartComponent;
  let fixture: ComponentFixture<GrossWaterUseChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrossWaterUseChartComponent]
    });
    fixture = TestBed.createComponent(GrossWaterUseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
