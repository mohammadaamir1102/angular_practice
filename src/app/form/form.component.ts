import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formValues: any;

  getRegFormValue(value: any) {
    this.formValues = value;
  }
}
