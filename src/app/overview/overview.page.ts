import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ConstructionService } from '../construction/construction.service';
import { Project, Phase, DailyLog, Subcontractor } from '../construction/construction.model';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { ConstructionService } from '../../services/construction.service';
//import { Project, Phase, DailyLog, Subcontractor } from '../../models/construction.model';

@Component({
  selector: 'app-construction-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],  // ← IonicModule covers ALL ion-* elements
})
export class ConstructionOverviewPage implements OnInit {
  project!: Project;
  phases: Phase[] = [];
  logs: DailyLog[] = [];
  subcontractors: Subcontractor[] = [];

  constructor(
    private constructionService: ConstructionService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.constructionService.getProject('oakwood').subscribe(p => this.project = p);
    this.constructionService.getPhases().subscribe(p => this.phases = p);
    this.constructionService.getDailyLogs().subscribe(l => this.logs = l);
    this.constructionService.getSubcontractors().subscribe(s => this.subcontractors = s);
  }

  getPhaseColor(completion: number): string {
    if (completion === 100) return 'success';
    if (completion >= 60) return 'primary';
    if (completion >= 20) return 'warning';
    return 'medium';
  }

  getSubBadge(status: string): string {
    return status === 'active' ? 'success' : status === 'upcoming' ? 'warning' : 'medium';
  }

  goToNewLog() {
    this.navCtrl.navigateForward('/construction/daily-log');
  }

  formatCurrency(val: number): string {
    return '$' + (val >= 1000000
      ? (val / 1000000).toFixed(1) + 'M'
      : val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val.toString());
  }
}
