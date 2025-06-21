import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cwpp-dashboard-card',
  templateUrl: './cwpp-dashboard-card.component.html',
  styleUrls: ['./cwpp-dashboard-card.component.css'],
  standalone: true, // ✅ This is essential
  imports: [CommonModule],
})
export class CWPPDashboardCardComponent {
  totalWorkloads = 120;
  protectedWorkloads = 95;
  unprotectedWorkloads = 25;
  lastScanTime = new Date();
  protectionStatus = 'Warning'; // Options: 'Healthy', 'Warning', 'Critical'

  getProtectionStatusClass(): string {
    switch (this.protectionStatus.toLowerCase()) {
      case 'healthy':
        return 'status healthy';
      case 'warning':
        return 'status warning';
      case 'critical':
        return 'status critical';
      default:
        return 'status';
    }
  }
}
