import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

import {COUNTRIES} from '../../common/countries';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  avatar: File;
  icons: Array<File> = [];
  user: User = {
    _id: '', appsCount: 0, name: '', avatar: '', birthday: '', apps: [{
      _id: '', avatar: '', name: ''
    }], country: ''
  };
  countries = COUNTRIES;

  constructor(private userService: UserService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
  }

  handleAvatarInput(files: FileList) {
    this.avatar = files.item(0);
  }

  handleIconInput(files: FileList) {
    this.icons.push(files.item(0));
  }

  submitForm(user: User) {
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

  onSubmit() {
    console.log(JSON.stringify(this.user));
    this.userService.createUser(this.user, this.avatar, this.icons).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/users']);
      },
      err => {
        console.log(err);
      });
  }

  removeApp(index: number) {
    this.user.apps.splice(index, 1);
  }

  addApp() {
    this.user.apps.push({_id: '', name: '', avatar: ''});
  }
}
