import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Projet_Haddad';
  color:string;

  user = [
    { id: 1, name: "khalil", age: 21, email: "Haddad@gmail.com" },
    { id: 2, name: "ali", age: 16, email: "ali@gmail.com" },
    { id: 3, name: "med", age: 17, email: "med@gmail.com" }
  ]

  show() {
    alert('Hello SE1');
  }
  
  searchAge: number = 0;

}
