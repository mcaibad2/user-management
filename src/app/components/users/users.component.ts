import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  users: User[];

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.getUsers(params['page']));
  }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(page) {
    this.userService.getUsers(page).subscribe(
      data => {
        this.users = data['data'];
      }
    );
  }
}
