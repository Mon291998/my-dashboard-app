import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerts-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts-card.component.html',
  styleUrls: ['./alerts-card.component.css'],
})
export class AlertsCardComponent {
  alerts = [
    { severity: 'High', count: 5 },
    { severity: 'Medium', count: 3 },
    { severity: 'Low', count: 2 },
  ];

  get totalCount(): number {
    return this.alerts.reduce((sum, alert) => sum + alert.count, 0);
  }
}
