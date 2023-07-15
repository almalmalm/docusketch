import { Component } from '@angular/core';
import { IconDefinition, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-generator',
  template: `
    <button mat-raised-button color="primary" (click)="generateIcon()">
      Generate New Icon
    </button>
    <fa-icon [icon]="randomIcon" size="6x" *ngIf="randomIcon"></fa-icon>
    <mat-progress-spinner
      class="example-margin"
      color="primary"
      mode="indeterminate"
      *ngIf="!randomIcon"
    >
    </mat-progress-spinner>
  `,
  styles: [''],
})
export class IconGeneratorComponent {
  faIcons = fas;

  randomIcon: IconDefinition | undefined;

  constructor() {}

  generateIcon() {
    const randomKey = Object.keys(fas);
    const randomIcon = randomKey[Math.floor(Math.random() * randomKey.length)];
    const result = fas[`${randomIcon}`];

    setTimeout(() => {
      this.randomIcon = result;
    }, 3000);
  }
}
