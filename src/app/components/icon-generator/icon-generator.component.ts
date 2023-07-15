import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-generator',
  templateUrl: './icon-generator.component.html',
  styleUrls: ['./icon-generator.component.css'],
})
export class IconGeneratorComponent {
  faIcons = fas;

  constructor() {
    console.log(
      this.randomKey[Math.floor(Math.random() * this.randomKey.length)]
    );
    console.log(this.randomIcon);
    console.log(this.finally);
  }
  randomKey = Object.keys(fas);
  randomIcon =
    this.randomKey[Math.floor(Math.random() * this.randomKey.length)];

  finally = fas[`${this.randomIcon}`];
}
