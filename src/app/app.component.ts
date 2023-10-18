import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

export interface ChartDataItem {
  withdrawal: number;
  dischange: number;
  netWaterUse: number;
  month: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title:{
      text: ''
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Withdrawal',
        type: 'column',
        data: [7, 20, 34, 16, 17, 24, 15, 36, 33, 17, 21],
        color: '#74becf'
      },
      {
        name: 'Discharge',
        type: 'column',
        data: [-4, -12, -14, -8, -4, -6, -9, -11, -13, -8, -5],
        color:'#fbc96c'
      },
      {
        name: 'Net Water Use',
        data: [8, 8, 20, 8, 13, 18, 6, 25, 20, 9, 16],
        type: 'line',
        color:'#000',
        marker:{
          // fillColor: '#fff',
          // color:'#fff',
          // lineColor: '#000',
        }
      },
    ],
    xAxis: {
      title: {
        text: 'Temperature',
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: '',
      },
      plotLines:[{
        color: '#0000ff',
        value: 15,
        width: 1,
        label: {
          text: 'Baseline',
          align: 'right',
          verticalAlign: 'bottom',
          y: 20
        },
        zIndex:10
      }]
    },
  };

  data: ChartDataItem[] = [
    {
      withdrawal: 7,
      dischange: -4,
      netWaterUse: 3,
      month: 'Jan',
    },
    {
      withdrawal: 20,
      dischange: -12,
      netWaterUse: 8,
      month: 'Feb',
    },
    {
      withdrawal: 34,
      dischange: -14,
      netWaterUse: 20,
      month: 'Mar',
    },
    {
      withdrawal: 16,
      dischange: -8,
      netWaterUse: 8,
      month: 'Apr',
    },
    {
      withdrawal: 17,
      dischange: -4,
      netWaterUse: 13,
      month: 'May',
    },
    {
      withdrawal: 24,
      dischange: -6,
      netWaterUse: 18,
      month: 'Jun',
    },
    {
      withdrawal: 15,
      dischange: -9,
      netWaterUse: 6,
      month: 'Jul',
    },
    {
      withdrawal: 7,
      dischange: -4,
      netWaterUse: 3,
      month: 'Aug',
    },
    {
      withdrawal: 36,
      dischange: -11,
      netWaterUse: 25,
      month: 'Sep',
    },
    {
      withdrawal: 33,
      dischange: -13,
      netWaterUse: 20,
      month: 'Oct',
    },
    {
      withdrawal: 17,
      dischange: -8,
      netWaterUse: 9,
      month: 'Nov',
    },
    {
      withdrawal: 21,
      dischange: -5,
      netWaterUse: 16,
      month: 'Dec',
    },
  ];
}
