import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
import { NetWaterUseChartComponent } from './net-water-use-chart/net-water-use-chart.component';
import { WaterAccountingComponent } from './water-accounting/water-accounting.component';
import { SourceWaterIntakeChartComponent } from './source-water-intake-chart/source-water-intake-chart.component';
import { WasteWaterDischargeChartComponent } from './waste-water-discharge-chart/waste-water-discharge-chart.component';
import { GrossWaterUseChartComponent } from './gross-water-use-chart/gross-water-use-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NetWaterUseChartComponent,
    WaterAccountingComponent,
    SourceWaterIntakeChartComponent,
    WasteWaterDischargeChartComponent,
    GrossWaterUseChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
