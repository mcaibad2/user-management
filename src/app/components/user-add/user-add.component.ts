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
  fileToUpload: File = null;

  constructor(private userService: UserService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  createUser(user: any) {
    this.userService.createUser(user, this.fileToUpload).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      });
    this.router.navigate(['/users']);
  }

  goBack() {
    this.location.back();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
