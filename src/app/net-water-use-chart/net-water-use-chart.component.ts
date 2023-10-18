import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'net-water-use-chart',
  templateUrl: './net-water-use-chart.component.html',
  styleUrls: ['./net-water-use-chart.component.scss']
})
export class NetWaterUseChartComponent {
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
        data: [3, 8, 20, 8, 13, 18, 6, 25, 20, 9, 16],
        type: 'line',
        color:'#000',
        marker:{
          fillColor: '#fff',
          color:'#fff',
          lineColor: '#000',
          lineWidth:1
        }
      },
    ],
    xAxis: {
      title: {
        text: '',
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
      }],
      reversedStacks: false
    },
  };
}
