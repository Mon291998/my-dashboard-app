import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-image-security-card',
  templateUrl: './image-security-card.component.html',
  styleUrls: ['./image-security-card.component.css'],
  imports: [CommonModule],
})
export class ImageSecurityCardComponent {
  criticalCount = 0;
  lastScanTime = new Date();
  vulnerabilityLevel = 'Low';

  getVulnerabilityLevelClass() {
    return {
      low: this.vulnerabilityLevel === 'Low',
      medium: this.vulnerabilityLevel === 'Medium',
      high: this.vulnerabilityLevel === 'High',
    };
  }

  viewReport() {
    // Add logic for viewing report
  }
}
