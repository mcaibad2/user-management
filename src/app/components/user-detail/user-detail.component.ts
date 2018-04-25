import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private user: User;
  private id: number;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private location: Location) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.readUser(this.id).subscribe(user => this.user = user);
  }

  goBack() {
    this.location.back();
  }

  deleteUser() {
    this.userService.delete(this.id);
    this.router.navigate(['/users/1']);
  }
}
