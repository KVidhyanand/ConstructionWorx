import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-explore-container',
  standalone: true,
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [CommonModule, RouterModule, IonicModule],  // ← IonicModule covers ALL ion-* elements
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
