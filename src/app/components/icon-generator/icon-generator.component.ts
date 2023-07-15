import { Component } from '@angular/core';
import { IconDefinition, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-generator',
  templateUrl: './icon-generator.component.html',
  styleUrls: ['./icon-generator.component.css'],
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
