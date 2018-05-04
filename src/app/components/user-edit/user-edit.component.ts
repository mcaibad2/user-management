import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {COUNTRIES} from '../../common/countries';
import {Location} from '@angular/common';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  avatar: File;
  countries = COUNTRIES;
  icons = new Map<string, File>();

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private location: Location) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  ngOnInit() {
  }

  getUser(id): void {
    this.userService.readUser(id).subscribe(user => {
      this.user = user;
    });
  }

  handleFileInput(files: FileList) {
    this.avatar = files.item(0);
  }

  handleIconInput(files: FileList, id: string) {
    this.icons.set(id, files.item(0));
  }

  onSubmit() {
    this.userService.updateUserAndApplications(this.user, this.avatar, this.icons).subscribe(
      data => {
        console.log(data);
        alert(JSON.stringify(data));
        this.router.navigate(['/users']);
      }, err => {
        console.log(err);
        alert(err);
      }
    );
  }

  removeApp(index: number) {
    this.user.apps.splice(index, 1);
  }

  setAppEditable(index: number) {
    const app = this.user.apps[index];
    app.editable = true;
  }

  setAppNonEditable(index: number) {
    const app = this.user.apps[index];
    app.editable = false;
  }

  addApp() {
    this.user.apps.push({
      _id: '',
      name: '',
      avatar: '',
      editable: true
    });
  }

  goBack() {
    this.location.back();
  }
}
