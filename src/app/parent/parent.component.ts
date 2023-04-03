import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  data = "Mohammad Aamir";

  users = [
    {
      name : 'Mohammad Aamir',
      age : 23,
      address : 'India'
    },
    {
      name : 'Mohammad Aasim',
      age : 20,
      address : 'India'
    },
    {
      name : 'Mohammad Aaquib',
      age : 16,
      address : 'India'
    }
  ]
}
