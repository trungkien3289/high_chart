import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'gross-water-use-chart',
  templateUrl: './gross-water-use-chart.component.html',
  styleUrls: ['./gross-water-use-chart.component.scss']
})
export class GrossWaterUseChartComponent {
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
        name: 'Municipal Server',
        type: 'column',
        data: [13, 4, 1, 5, 3, 0],
        color: '#7197ca',
      },
      {
        name: 'Third-party Disposal',
        type: 'column',
        data: [2, 106, 21, 2, 0, 4],
        color:'#0062a9',
      },
      {
        name: 'River or Lake: Nonpotable',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#a5deab',
      },
      {
        name: 'Ocean or Tide',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#54bbba',
      },
      {
        name: 'Groundwater',
        data: [0, 0, 0, 0, 0, 0],
        type: 'column',
        color:'#fbc96c',
      },
      {
        name: 'Onsite Disposal',
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
