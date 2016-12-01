import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User('');
  }

  submitForm(form: any): void {
    console.log(form);
    alert('Form sent');
  }

}
