import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { ConstructionService } from '../construction/construction.service';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  // ← required for [formGroup] and formControlName
    RouterModule,
    IonicModule,
  ],
})
export class DailyLogPage {
  form: FormGroup;
  projects       = ['Oakwood Residences', 'Metro Commercial Hub', 'Sunrise Remodel', 'Lakeview Custom Build'];
  weatherOptions = ['Clear', 'Cloudy', 'Rain', 'Wind', 'Snow'];

  constructor(
    private fb: FormBuilder,
    private svc: ConstructionService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.form = this.fb.group({
      project:       [this.projects[0], Validators.required],
      date:          [new Date().toISOString().split('T')[0], Validators.required],
      weather:       ['Clear', Validators.required],
      workersOnSite: [0, [Validators.required, Validators.min(0)]],
      workPerformed: ['', Validators.required],
      issues:        [''],
    });
  }

  async save() {
    if (this.form.invalid) return;
    this.svc.saveDailyLog(this.form.value).subscribe(async () => {
      const toast = await this.toastCtrl.create({
        message: 'Daily log saved successfully',
        duration: 2000,
        color: 'success',
        position: 'top',
      });
      await toast.present();
      this.navCtrl.back();
    });
  }

  cancel() { this.navCtrl.back(); }
}
