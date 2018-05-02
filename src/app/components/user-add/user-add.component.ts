import * as _ from 'lodash';

import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  avatar: File;
  icons: Array<File> = [];
  words2 = [];

  constructor(private userService: UserService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.avatar = files.item(0);
  }

  handleIcons(files: FileList) {
    this.icons.push(files.item(0));
  }

  submitForm(user: User) {
    console.log(user);
    this.userService.createUser(user, this.avatar, this.icons).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/users']);
      },
      err => {
        console.log(err);
      });
  }

  goBack() {
    this.location.back();
  }

  addApplication() {
    this.words2.push({value: 'gsre'});
  }
}
