import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  };

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart'),
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: this.options
    }),
    cty = document.getElementById('myChart1'),
    myChart1 = new Chart(cty, {
      data: this.data,
      type: 'polarArea',
      options: this.options
    }),
    ctz = document.getElementById('myChart2'),
    myPieChart = new Chart(ctz, {
      type: 'doughnut',
      data: this.data,
      options: this.options
    }),
    cta = document.getElementById('myChart3'),
    myLineChart = new Chart(cta, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: 'Prime and Fibonacci',
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
          },
          {
            label: 'My Second dataset',
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 0.2)',
            // fillColor: 'rgba(153, 102, 255, 0.2)',
            // strokeColor: 'rgba(153, 102, 255, 0.2)',
            // pointColor: 'rgba(153, 102, 255, 0.2)',
            // pointStrokeColor: "#fff",
            // pointHighlightFill: "#fff",
            // pointHighlightStroke: 'rgba(153, 102, 255, 0.2)',
            data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            stacked: false
          }]
        }
      }
    });
  }
}
