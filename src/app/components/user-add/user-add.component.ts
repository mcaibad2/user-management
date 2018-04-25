import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  submitted = false;

  constructor(private userService: UserService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  createUser(value: any) {
    this.userService.createUser(value);
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.submitted = true;
  }

  goBack() {
    this.location.back();
  }
}
