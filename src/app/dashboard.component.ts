import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgChartsModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any[] = [];
  showForm = false;
  selectedSection: any = null;
  newWidget = { title: '', type: 'donut' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/dashboard-data.json').subscribe(data => {
      this.dashboardData = data;
    });
  }

  openAddWidgetForm(section: any) {
    this.selectedSection = section;
    this.newWidget = { title: '', type: 'donut' };
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  addWidget() {
    const chartData = this.newWidget.type === 'donut'
      ? {
          labels: ['A', 'B'],
          datasets: [{ data: [50, 50], backgroundColor: ['#34d399', '#f87171'] }]
        }
      : {
          labels: ['X', 'Y'],
          datasets: [{ label: 'Example', data: [5, 10], backgroundColor: '#60a5fa' }]
        };

    const widget = {
      title: this.newWidget.title,
      type: this.newWidget.type,
      data: chartData
    };

    this.selectedSection.widgets.push(widget);
    this.closeForm();
  }

  deleteWidget(section: any, index: number) {
    section.widgets.splice(index, 1);
  }
}
