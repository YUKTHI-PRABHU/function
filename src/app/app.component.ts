import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  FirstName:string="Anurag";
  LastName:string="Maheshwar";
  GetFullName():string{
    return this.FirstName+' '+ this.LastName;
  }
  Age:number=45;
  GetAge():number{
    return this. Age;
  }
}
