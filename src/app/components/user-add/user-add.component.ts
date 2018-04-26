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
  fileToUpload: File = null;
  user: Object = {};
  avatar: Object = {};

  constructor(private userService: UserService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatar = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        };
      };
    }
  }

  submitForm(user: User) {
    console.log(user);
    user.avatar = this.avatar;
    this.userService.createUser(user).subscribe(
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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
