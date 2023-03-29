import { Component } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.css'],
})
export class PropbindingComponent {
  proBinding: string = 'Property binding';
  interpolBinding: string = 'Interpolation binding';

  isEnable: boolean = true;
  enableTextBox() {
    this.isEnable = false;
  }
}
