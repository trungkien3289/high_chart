import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'waste-water-discharge-chart',
  templateUrl: './waste-water-discharge-chart.component.html',
  styleUrls: ['./waste-water-discharge-chart.component.scss']
})
export class WasteWaterDischargeChartComponent {
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
        data: [0, 0, 0, 0, 0, 0],
        color: '#7197ca'
      },
      {
        name: 'Third-party Disposal',
        type: 'column',
        data: [4.7, 0, 0, 0.4, 1.3, 0],
        color:'#0062a9'
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
