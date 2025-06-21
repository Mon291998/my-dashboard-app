import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vulnerabilities-card',
  imports: [CommonModule],
  templateUrl: './vulnerabilities-card.component.html',
  styleUrls: ['./vulnerabilities-card.component.css'],
})
export class VulnerabilitiesCardComponent {
  vulnerabilities = [
    { severity: 'Critical', count: 7 },
    { severity: 'High', count: 4 },
    { severity: 'Low', count: 2 },
  ];

  get totalCount(): number {
    return this.vulnerabilities.reduce((sum, vuln) => sum + vuln.count, 0);
  }
}
