import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  firstName: String = 'Aamir';
  lastName: String = 'khan';

  getName() {
    return this.firstName.concat(` ` + this.lastName);
  }

  obj = {
    username: 'Aasim',
    mobile: 75453543453,
  };

  arr = ['aamir', 'aasim', 'aaquib'];

  age = 18;

  getFullName(): String {
    return this.firstName + ' ' + this.lastName;
  }
}
