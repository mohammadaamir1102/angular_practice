import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  inputValue:any;
  keyupEventValue:any;

  clickEvent(val: any){
    return this.inputValue = val; 
  }

  keyupEvent(){

  }

}
