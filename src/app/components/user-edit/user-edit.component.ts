import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  avatar: File;
  icons = new Map<number, File>();

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  ngOnInit() {
  }

  getUser(id): void {
    this.userService.readUser(id).subscribe(user => this.user = user);
  }

  handleFileInput(files: FileList) {
    this.avatar = files.item(0);
  }

  handleIconInput(files: FileList, index: number) {
    this.icons.set(index, files.item(0));
  }

  onSubmit() {
    this.userService.updateUser(this.user, this.avatar, this.icons).subscribe(
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
    this.user.apps.push({
      _id: '',
      name: '',
      avatar: ''
    });
  }
}
