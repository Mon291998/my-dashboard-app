import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { CloudAccountsCardComponent } from './cnapp-dashboard/components/dashboard/cloud-accounts-card/cloud-accounts-card.component';
import { AlertsCardComponent } from './cnapp-dashboard/components/dashboard/alerts-card.component/alerts-card.component';
import { ImageSecurityCardComponent } from './cnapp-dashboard/components/dashboard/image-security-card/image-security-card.component';
import { VulnerabilitiesCardComponent } from './cnapp-dashboard/components/dashboard/vulnerabilities-card/vulnerabilities-card.component';
import { WorkloadAlertsCardComponent } from './cnapp-dashboard/components/dashboard/workload-alerts-card/workload-alerts-card.component';
import { RiskAssessmentCardComponent } from './cnapp-dashboard/components/dashboard/risk-assessment-card/risk-assessment-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertsCardComponent,
    RouterModule,
    NgChartsModule,

    CloudAccountsCardComponent,
    ImageSecurityCardComponent,
    VulnerabilitiesCardComponent,
    WorkloadAlertsCardComponent,
    RiskAssessmentCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'cnapp-dashboard';
  searchText = '';
}
