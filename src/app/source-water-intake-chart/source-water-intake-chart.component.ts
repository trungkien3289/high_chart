import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'source-water-intake-chart',
  templateUrl: './source-water-intake-chart.component.html',
  styleUrls: ['./source-water-intake-chart.component.scss']
})
export class SourceWaterIntakeChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
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
        name: 'Municipal Water: Potable',
        type: 'column',
        data: [7, 0, 0, 3.8, 1.4, 0],
        color: '#7197ca'
      },
      {
        name: 'Municipal Water:Nonpotable',
        type: 'column',
        data: [0, 0, 0, 0, 0, 0],
        color:'#0062a9'
      },
      {
        name: 'Lorem',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#a5deab',
      },
      {
        name: 'River or Lake: Nonpotable',
        data: [0, 1.3, 0.4, 0, 0, 0],
        type: 'column',
        color:'#54bbba',
      },
      {
        name: 'Ocean or Tide',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#a789a4',
      },
      {
        name: 'Groundwater',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#fbc96c',
      },
      {
        name: 'Other',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#f47769',
      },
    ],
    xAxis: {
      title: {
        text: '',
      },
      categories: [
        'Process: Process 1',
        'Cooling Tower for: Process 1',
        'Cooling Tower for: Air Conditioning',
        'Boiler for: Facility Needs',
        'Kitchen and Restrooms',
        'Landscaping and Imigration',
      ],
    },
    yAxis: {
      title: {
        text: 'Million Gallon',
      },
      reversedStacks: false
    },
  };
}
