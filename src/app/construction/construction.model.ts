export interface Project {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'on-hold' | 'completed';
  completion: number;
  budgetRemaining: number;
  dueDate: string;
}

export interface Phase {
  name: string;
  completion: number;
}

export interface DailyLog {
  id: string;
  projectId: string;
  date: string;
  weather: string;
  workersOnSite: number;
  workPerformed: string;
  issues: string;
  author: string;
}

export interface Subcontractor {
  id: string;
  initials: string;
  name: string;
  workers: number;
  scope: string;
  status: 'active' | 'upcoming' | 'completed';
}

export interface WorkOrder {
  id: string;
  title: string;
  assignedTo: string;
  dueDate: string;
  estimatedCost: number;
  status: 'open' | 'in-progress' | 'completed';
}

export interface RFI {
  id: string;
  title: string;
  description: string;
  submittedDate: string;
  dueDate: string;
  status: 'open' | 'pending' | 'closed' | 'overdue';
}

export interface PurchaseOrder {
  id: string;
  vendor: string;
  description: string;
  amount: number;
  status: 'ordered' | 'received' | 'partial';
}

export interface Milestone {
  day: number;
  month: string;
  title: string;
  description: string;
  status: 'upcoming' | 'confirmed' | 'scheduled';
}
