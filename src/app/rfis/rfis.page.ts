import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConstructionService } from '../construction/construction.service';
import { RFI } from '../construction/construction.model';

//import { ConstructionService } from '../../services/construction.service';
//import { RFI } from '../../models/construction.model';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rfis',
  templateUrl: './rfis.page.html',
  styleUrls: ['./rfis.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],  // ← IonicModule covers ALL ion-* elements
})
export class RFIsPage implements OnInit {
  rfis: RFI[] = [];
  openCount = 0;
  closedCount = 0;

  constructor(private svc: ConstructionService) {}

  ngOnInit() {
    this.svc.getRFIs().subscribe(rfis => {
      this.rfis = rfis;
      this.openCount = rfis.filter(r => r.status !== 'closed').length;
      this.closedCount = rfis.filter(r => r.status === 'closed').length;
    });
  }

  getBadgeColor(status: string): string {
    const map: Record<string, string> = {
      'open': 'primary', 'pending': 'warning',
      'closed': 'success', 'overdue': 'danger'
    };
    return map[status] ?? 'medium';
  }
}
