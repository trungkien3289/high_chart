import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceWaterIntakeChartComponent } from './source-water-intake-chart.component';

describe('SourceWaterIntakeChartComponent', () => {
  let component: SourceWaterIntakeChartComponent;
  let fixture: ComponentFixture<SourceWaterIntakeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceWaterIntakeChartComponent]
    });
    fixture = TestBed.createComponent(SourceWaterIntakeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
