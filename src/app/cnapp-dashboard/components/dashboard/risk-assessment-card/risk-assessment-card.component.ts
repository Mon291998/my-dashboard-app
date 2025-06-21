import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-assessment-card',
  templateUrl: './risk-assessment-card.component.html',
  styleUrls: ['./risk-assessment-card.component.css'],
  standalone: true,
})
export class RiskAssessmentCardComponent {
  riskScore: number = 78;

  risks = {
    critical: 12,
    high: 25,
    medium: 40,
    low: 22,
  };

  viewDetails(): void {
    alert('Redirecting to detailed risk assessment...');
  }
}
