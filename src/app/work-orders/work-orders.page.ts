import { Component, OnInit } from '@angular/core';

import { ConstructionService } from '../construction/construction.service';
import { WorkOrder} from '../construction/construction.model';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { ConstructionService } from '../../services/construction.service';
//import { WorkOrder } from '../../models/construction.model';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.page.html',
  styleUrls: ['./work-orders.page.scss'],
  imports: [CommonModule, RouterModule, IonicModule],  // ← IonicModule covers ALL ion-* elements
})
export class WorkOrdersPage implements OnInit {
  allOrders: WorkOrder[] = [];
  filteredOrders: WorkOrder[] = [];
  filter: string = 'all';

  filters = [
    { label: 'All',         value: 'all'        },
    { label: 'Open',        value: 'open'        },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Completed',   value: 'completed'  },
  ];

  constructor(private svc: ConstructionService) {}

  ngOnInit() {
    this.svc.getWorkOrders().subscribe(orders => {
      this.allOrders = orders;
      this.applyFilter('all');
    });
  }

  applyFilter(value: string) {
    this.filter = value;
    this.filteredOrders = value === 'all'
      ? this.allOrders
      : this.allOrders.filter(o => o.status === value);
  }

  getBadgeColor(status: string): string {
    const map: Record<string, string> = {
      'open': 'primary', 'in-progress': 'warning', 'completed': 'success'
    };
    return map[status] ?? 'medium';
  }

  formatCost(cost: number): string {
    return '$' + cost.toLocaleString();
  }
}
