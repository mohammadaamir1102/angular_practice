import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent {

  // here click an event while click on the page it will fire
  @HostListener('click', ['$event']) 
  showHostListenerMessage(){
    alert('This is the Host Listener');
  }

}
