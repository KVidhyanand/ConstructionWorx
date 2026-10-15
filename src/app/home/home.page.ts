import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';


interface ModuleTile {
  title: string;
  subtitle: string;
  icon: string;
  route: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class HomePage {

  userName = 'John Doe';
  companyName = 'ConstructWorx';

  stats = [
    { label: 'Active projects', value: '12', color: 'primary' },
    { label: 'Open tasks',      value: '34', color: 'warning' },
    { label: 'Pending RFIs',    value: '4',  color: 'danger'  },
    { label: 'Invoices due',    value: '3',  color: 'success' },
  ];

  modules: ModuleTile[] = [
    {
      title: 'Construction',
      subtitle: 'Projects & site management',
      icon: '🏗️',
      route: '/construction/overview',
      color: '#0C447C',
      bgColor: '#E6F1FB',
    },
    {
      title: 'Estimating',
      subtitle: 'Estimates & job costing',
      icon: '💰',
      route: '/estimating/estimates',
      color: '#27500A',
      bgColor: '#EAF3DE',
    },
    {
      title: 'Scheduling',
      subtitle: 'Gantt & milestones',
      icon: '📅',
      route: '/scheduling/gantt',
      color: '#633806',
      bgColor: '#FAEEDA',
    },
    {
      title: 'Work Orders',
      subtitle: 'Tasks & assignments',
      icon: '🔧',
      route: '/construction/work-orders',
      color: '#3C3489',
      bgColor: '#EEEDFE',
    },
    {
      title: 'RFIs',
      subtitle: 'Requests for information',
      icon: '📋',
      route: '/construction/rfis',
      color: '#712B13',
      bgColor: '#FAECE7',
    },
    {
      title: 'Purchase Orders',
      subtitle: 'Suppliers & procurement',
      icon: '🧾',
      route: '/construction/purchase-orders',
      color: '#085041',
      bgColor: '#E1F5EE',
    },
    {
      title: 'Daily Log',
      subtitle: 'Site diary entries',
      icon: '📝',
      route: '/construction/daily-log',
      color: '#0C447C',
      bgColor: '#E6F1FB',
    },
    {
      title: 'Cost Database',
      subtitle: 'Labour & material rates',
      icon: '📊',
      route: '/estimating/cost-database',
      color: '#27500A',
      bgColor: '#EAF3DE',
    },
  ];

  constructor(private navCtrl: NavController) {}

  navigate(route: string) {
    this.navCtrl.navigateForward(route);
  }
}
