import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Project, Phase, DailyLog, Subcontractor,
  WorkOrder, RFI, PurchaseOrder, Milestone
} from '../construction/construction.model';

//'../models/construction.model';

@Injectable({ providedIn: 'root' })
export class ConstructionService {

  getProject(id: string): Observable<Project> {
    return of({
      id: 'oakwood',
      name: 'Oakwood Residences',
      type: 'General Contractor',
      status: 'active',
      completion: 68,
      budgetRemaining: 1200000,
      dueDate: 'Mar 30, 2026'
    });
  }

  getPhases(): Observable<Phase[]> {
    return of([
      { name: 'Foundation',      completion: 100 },
      { name: 'Framing',         completion: 95  },
      { name: 'Electrical rough-in', completion: 72 },
      { name: 'Plumbing',        completion: 60  },
      { name: 'Drywall',         completion: 30  },
      { name: 'Finishes',        completion: 0   },
    ]);
  }

  getDailyLogs(): Observable<DailyLog[]> {
    return of([
      { id: 'dl1', projectId: 'oakwood', date: '2026-03-18', weather: 'Clear',
        workersOnSite: 14, workPerformed: 'Framing crew completed east wing',
        issues: '', author: 'J. Doe' },
      { id: 'dl2', projectId: 'oakwood', date: '2026-03-18', weather: 'Clear',
        workersOnSite: 14, workPerformed: 'Electrical rough-in started, unit 4',
        issues: 'Concrete delivery delayed — supplier', author: 'Site Mgr' },
    ]);
  }

  getSubcontractors(): Observable<Subcontractor[]> {
    return of([
      { id: 'bs', initials: 'BS', name: 'BrightSpark Electrical',
        workers: 6, scope: 'Elec rough-in', status: 'active' },
      { id: 'pf', initials: 'PF', name: 'ProFlow Plumbing',
        workers: 4, scope: 'Plumbing phase 2', status: 'active' },
      { id: 'dw', initials: 'DW', name: 'DryWall Plus',
        workers: 0, scope: 'Starting Mar 20', status: 'upcoming' },
    ]);
  }

  getMilestones(): Observable<Milestone[]> {
    return of([
      { day: 21, month: 'Mar', title: 'Framing inspection',
        description: 'City of Denver · 9:00 AM', status: 'upcoming' },
      { day: 25, month: 'Mar', title: 'Drywall delivery',
        description: 'BuildCo Materials', status: 'scheduled' },
      { day: 30, month: 'Mar', title: 'Client walkthrough',
        description: 'Owner: Linda Reeves', status: 'confirmed' },
    ]);
  }

  getWorkOrders(): Observable<WorkOrder[]> {
    return of([
      { id: 'WO-041', title: 'Install HVAC ductwork — Unit 3',
        assignedTo: 'AirTech LLC', dueDate: 'Mar 22', estimatedCost: 4200, status: 'in-progress' },
      { id: 'WO-040', title: 'Rough-in plumbing — Units 5 & 6',
        assignedTo: 'ProFlow', dueDate: 'Mar 15', estimatedCost: 6800, status: 'completed' },
      { id: 'WO-039', title: 'Panel box installation — Main',
        assignedTo: 'BrightSpark', dueDate: 'Mar 24', estimatedCost: 2500, status: 'open' },
      { id: 'WO-038', title: 'Concrete pour — East foundation',
        assignedTo: 'CoreCon', dueDate: 'Mar 8', estimatedCost: 11400, status: 'completed' },
    ]);
  }

  getRFIs(): Observable<RFI[]> {
    return of([
      { id: 'RFI-015', title: 'Beam size clarification — East wing',
        description: 'Structural engineer response needed on LVL beam sizing.',
        submittedDate: 'Mar 10', dueDate: 'Mar 14', status: 'overdue' },
      { id: 'RFI-014', title: 'Electrical routing — bathroom units',
        description: 'Conflict between plumbing and electrical routes in bathrooms 3–6.',
        submittedDate: 'Mar 14', dueDate: 'Mar 20', status: 'pending' },
      { id: 'RFI-013', title: 'Window spec — south facade',
        description: 'Resolved: Andersen 400 series confirmed. Answered Mar 12.',
        submittedDate: 'Mar 7', dueDate: 'Mar 12', status: 'closed' },
    ]);
  }

  getPurchaseOrders(): Observable<PurchaseOrder[]> {
    return of([
      { id: 'PO-088', vendor: 'BuildCo Materials',
        description: 'Drywall — 200 sheets, delivery Mar 25', amount: 8400, status: 'ordered' },
      { id: 'PO-087', vendor: 'ElecSupply Co.',
        description: 'Panel boxes + breakers x12', amount: 3200, status: 'received' },
      { id: 'PO-086', vendor: 'PipePro Supplies',
        description: 'PVC pipe, fittings — Phase 2', amount: 5100, status: 'received' },
      { id: 'PO-085', vendor: 'ReadyMix Concrete',
        description: 'Foundation pour — 40 cubic yards', amount: 12800, status: 'received' },
      { id: 'PO-084', vendor: 'LumberMax',
        description: 'Framing lumber — full package', amount: 18600, status: 'partial' },
    ]);
  }

  saveDailyLog(log: Partial<DailyLog>): Observable<boolean> {
    console.log('Saving daily log:', log);
    return of(true);
  }
}
