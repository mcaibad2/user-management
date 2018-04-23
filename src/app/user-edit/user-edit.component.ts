import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
