import { Component } from '@angular/core';

@Component({
  selector: 'app-workload-alerts-card',
  templateUrl: './workload-alerts-card.component.html',
  styleUrls: ['./workload-alerts-card.component.css'],
  standalone: true,
})
export class WorkloadAlertsCardComponent {
  alerts = {
    critical: 8,
    high: 16,
    medium: 28,
    low: 11,
  };

  get totalAlerts(): number {
    return (
      this.alerts.critical +
      this.alerts.high +
      this.alerts.medium +
      this.alerts.low
    );
  }

  viewAlerts(): void {
    alert('Navigating to detailed workload alert view...');
  }
}
