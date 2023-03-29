import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  inputValue: any;
  keyupValue: any;
  keyupEnter: any;
  keydownValue: any;

  clickEvent(val: any) {
    return (this.inputValue = val);
  }

  keyupEvent(data: any) {
    this.keyupValue = data;
  }

  keyEnterEvent(val: any) {
    this.keyupEnter = val.target.value;
  }

  keydownEvent(val: any) {
    this.keydownValue = val;
  }
}
