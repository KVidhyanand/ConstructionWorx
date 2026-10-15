import { Component, OnInit } from '@angular/core';

import { ConstructionService } from '../construction/construction.service';
import { PurchaseOrder } from '../construction/construction.model';

//import { ConstructionService } from '../../services/construction.service';
//import { PurchaseOrder } from '../../models/construction.model';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.page.html',
  styleUrls: ['./purchase-orders.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],  // ← IonicModule covers ALL ion-* elements
})
export class PurchaseOrdersPage implements OnInit {
  orders: PurchaseOrder[] = [];
  committed = 0;
  received = 0;

  constructor(private svc: ConstructionService) {}

  ngOnInit() {
    this.svc.getPurchaseOrders().subscribe(orders => {
      this.orders = orders;
      this.committed = orders.reduce((s, o) => s + o.amount, 0);
      this.received = orders
        .filter(o => o.status === 'received')
        .reduce((s, o) => s + o.amount, 0);
    });
  }

  getBadgeColor(status: string): string {
    const map: Record<string, string> = {
      'ordered': 'warning', 'received': 'success', 'partial': 'danger'
    };
    return map[status] ?? 'medium';
  }

  formatK(val: number): string {
    return '$' + (val / 1000).toFixed(0) + 'K';
  }

  formatCurrency(val: number): string {
    return '$' + val.toLocaleString();
  }
}
