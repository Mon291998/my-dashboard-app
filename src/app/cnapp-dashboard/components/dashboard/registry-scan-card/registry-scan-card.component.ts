import { Component } from '@angular/core';

@Component({
  selector: 'app-registry-scan-card',
  templateUrl: './registry-scan-card.component.html',
  styleUrls: ['./registry-scan-card.component.css'],
  standalone: true,
})
export class RegistryScanCardComponent {
  title = 'Registry Scan';

  metrics = {
    totalImages: 140,
    vulnerableImages: 78,
    criticalVulns: 29,
  };

  vulnerabilities = [
    { severity: 'Critical', count: 29, class: 'critical' },
    { severity: 'High', count: 65, class: 'high' },
    { severity: 'Medium', count: 110, class: 'medium' },
    { severity: 'Low', count: 80, class: 'low' },
  ];

  viewReport(): void {
    alert('Viewing full registry scan report...');
  }
}
