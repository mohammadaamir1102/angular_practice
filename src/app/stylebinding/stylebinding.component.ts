import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css'],
})
export class StylebindingComponent {
  colorName = 'golden';
  colorNameByMethod = 'purple';
  err = true;
  buttonClick() {
    this.colorNameByMethod = 'red';
  }
}
