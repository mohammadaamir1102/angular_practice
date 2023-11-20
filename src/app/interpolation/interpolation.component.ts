import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {

   outPut: Map<string, number> = new Map();
  ngOnInit():void{
    this.outPut = this.countRecordsByDate(this.usersData);
    for(let [key, value] of this.outPut){
      console.log('key is '+ key);
      console.log('value is '+ value);
      console.log(key, value);
      
    }
    
  }

  usersData: any =
    [
      {
        name: 'Aamir Khan',
        age: 33,
        date: '1999-02-11'
      },
      {
        name: 'Aamir Khan',
        age: 33,
        date: '1999-02-11'
      },
      {
        name: 'Aamir Khan',
        age: 33,
        date: '1999-02-11'
      },
      {
        name: 'Aasim Khan',
        age: 32,
        date: '1998-03-10'
      },
      {
        name: 'Aamir Khan',
        age: 33,
        date: '1998-03-10'
      },
      {
        name: 'Aamir Khan',
        age: 33,
        date: '20000-04-09'
      },
    ]


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

  countRecordsByDate(usersData: any): Map<string, number> {

    const dateCountMap: Map<string, number> = new Map();

    for (const item of usersData) {
      const date = item.date;
      if (dateCountMap.has(date)) {
        dateCountMap.set(date, dateCountMap.get(date)! + 1);
      } else {
        dateCountMap.set(date, 1);
      }
    }

    return dateCountMap;
  }
  userJson = {
    username: 'aamir',
    email: 'aamir@gmail.com',
    // Other user properties
  };

  checkUsername(value: any): void {
    if (this.userJson.username === value) {
      alert('input is equals to user name');
    } else {
      alert('input is not equals to user name');
    }
  }


}
