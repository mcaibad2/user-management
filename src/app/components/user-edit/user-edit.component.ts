import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {USERS} from '../../mock-data/mock-users';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  users = USERS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.users.find(user => {
      return user.id === id;
    });
  }
}
