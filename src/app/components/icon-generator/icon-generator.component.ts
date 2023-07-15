import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-icon-generator',
  templateUrl: './icon-generator.component.html',
  styleUrls: ['./icon-generator.component.css'],
})
export class IconGeneratorComponent {
  faIcons = fas;

  randomIcon: any;

  constructor() {
    console.log(this.randomIcon);
  }

  generateIcon() {
    const randomKey = Object.keys(fas);
    const randomIcon = randomKey[Math.floor(Math.random() * randomKey.length)];

    const final = fas[`${randomIcon}`];
    console.log(final);
    setTimeout(() => {
      this.randomIcon = final;
    }, 3000);
  }
}
