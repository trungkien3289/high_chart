import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-water-accounting',
  templateUrl: './water-accounting.component.html',
  styleUrls: ['./water-accounting.component.scss'],
})
export class WaterAccountingComponent {
  serieColors = ['#74becf', '#74bda8', '#fbc96c', '#d5a0af'];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      marginTop: 100,
      events: {
        load() {
          const chart: any = this;
          chart.customAxisTitle = [];
        },
        render() {
          const chart: any = this,
            ticks = chart.xAxis[0].ticks;

            const ren = chart.renderer;

            // Create titles on initial load
            if (chart.customAxisTitle.length === 0) {

              const firstTitle = ren.text(
                'Heating',
                0,
                chart.plotTop - 25
              ).add();

              const secondTitle = ren.text(
                'Cooling',
                0,
                chart.plotTop - 25
              ).add();

              const thirdTitle = ren.text(
                'Process',
                0,
                chart.plotTop - 25
              ).add();

              chart.customAxisTitle.push(firstTitle, secondTitle, thirdTitle);
            }

            // Update title each title position in responsive charts
              chart.customAxisTitle.forEach((title: any, i: any) => {
                title.attr({
                  x: chart.series[i].center[0] + chart.yAxis[0].left - title.getBBox().width / 2
                })
              });
        }
      }
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        point: {
          events: {
            legendItemClick: function (
              event: Highcharts.PointLegendItemClickEventObject
            ) {
              let name = this.name;
              let series = this.series.chart.series;
              Highcharts.each(series, function (ob: any, j: any) {
                Highcharts.each(ob.data, function (p: any, i: any) {
                  if (p.name === name) {
                    if (p.visible === true) {
                      p.setVisible(false);
                    } else {
                      p.setVisible(true);
                    }
                  }
                });
              });
              return false;
            },
          },
        },
        dataLabels: {
          enabled: true,
          format:'{y}%',
          color: '#000',
          position:'center',
          verticalAlign: 'middle',
          distance: -25
        }
      },
    },
    series: [
      {

        showInLegend: true,
        type: 'pie',
        name: 'Heating',
        data: [
          {
            name: 'Wastewater Dischange',
            y: 40,
             color: this.serieColors[0]
          },
          {
            name: 'Recycled To Other System',
            y: 35,
            color: this.serieColors[1]
          },
          {
            name: 'Water Comsume In Product',
            y: 10,
            color: this.serieColors[2]
          },
          {
            name: 'Known Losses',
            y: 15,
            color: this.serieColors[3]
          },
        ],
        center: ['25%', 80],
        size: 200,
      },
      {
        type: 'pie',
        name: 'Cooling',
        data: [
          {
            name: 'Wastewater Dischange',
            y: 40,
            color: this.serieColors[0]
          },
          {
            name: 'Recycled To Other System',
            y: 25,
            color: this.serieColors[1]
          },
          {
            name: 'Water Comsume In Product',
            y: 20,
            color: this.serieColors[2]
          },
          {
            name: 'Known Losses',
            y: 15,
            color: this.serieColors[3]
          },
        ],
        center: ['50%', 80],
        size: 200,
      },
      {
        type: 'pie',
        name: 'Process',
        data: [
          {
            name: 'Wastewater Dischange',
            y: 47,
            color: this.serieColors[0]
          },
          {
            name: 'Recycled To Other System',
            y: 25,
            color: this.serieColors[1]
          },
          {
            name: 'Water Comsume In Product',
            y: 13,
            color: this.serieColors[2]
          },
          {
            name: 'Known Losses',
            y: 15,
            color: this.serieColors[3]
          },
        ],
        center: ['75%', 80],
        size: 200,
      },
    ],
  };

  onToogleLegend() {}
}
