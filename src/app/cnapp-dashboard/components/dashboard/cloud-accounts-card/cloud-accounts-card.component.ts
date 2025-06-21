import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cloud-accounts-card',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './cloud-accounts-card.component.html',
  styleUrls: ['./cloud-accounts-card.component.css'],
})
export class CloudAccountsCardComponent {
  public donutChartLabels: string[] = ['Connected', 'Not Connected'];
  public donutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.donutChartLabels,
    datasets: [
      {
        data: [2, 0],
        backgroundColor: ['#3B82F6', '#E5E7EB'],
        borderWidth: 1,
      },
    ],
  };
  public donutChartType: ChartType = 'doughnut';
}
