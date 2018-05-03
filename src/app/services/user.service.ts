///<reference path="../model/user.ts"/>

import {Injectable} from '@angular/core';
import {User} from '../model/user';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HistoryService} from './history.service';
import {HistoryItem} from '../model/historyItem';

@Injectable()
export class UserService {

  users: User[];

  constructor(private http: HttpClient, private historyService: HistoryService) {
  }

  createUser(user: User, avatar: File, icons: File[]) {
    console.log(`Created user with name: ${user.name}`);
    this.historyService.create(new HistoryItem(`Created user with name: ${user.name}`, new Date()));
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('birthday', user.birthday);
    formData.append('country', user.country);
    if (avatar) {
      formData.append('avatar', avatar, avatar.name);
    }
    for (let i = 0; i < icons.length; i++) {
      formData.append('icons', icons[i], icons[i]['name']);
    }
    for (let i = 0; i < user.apps.length; i++) {
      formData.append('apps', user.apps[i].name);
    }
    return this.http.post('http://lab.wappier.com/user', formData, {
      headers: new HttpHeaders({
        'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
      })
    });
  }

  // readUsers(): Observable<User[]> {
  //   console.log(`Get users`);
  //   this.historyService.create(new HistoryItem(`Got users`, new Date()));
  //   this.users = USERS;
  //   return of(this.users);
  // }

  setUsers(users: User[]) {
    this.users = users;
  }

  readUsers() {
    this.historyService.create(new HistoryItem(`Got users`, new Date()));
    return this.http.get('http://lab.wappier.com/user', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
      })
    });
  }

  readUser(id: string): Observable<User> {
    console.log(`Read user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Read user with id: ${id}`, new Date()));
    return of(this.users.find(user => user._id === id));
  }

  updateUser(user: User, avatar: File, icons: Map<string, File>) {
    console.log(`Update user with id: ${user._id}`);
    this.historyService.create(new HistoryItem(`Updated user with id: ${user._id}`, new Date()));
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('birthday', user.birthday);
    formData.append('country', user.country);
    if (avatar) {
      formData.append('avatar', avatar, avatar.name);
    }
    for (let i = 0; i < user.apps.length; i++) {
      const app = user.apps[i];
      if (icons.has(app._id)) {
        const file = icons.get(app._id);
        formData.append('icons', file, file.name);
      } else {
        formData.append('icons', app.avatar);
      }
      formData.append('apps', app.name);
    }
    return this.http.put(`http://lab.wappier.com/user/${user._id}`, formData, {
      headers: new HttpHeaders({
        'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
      })
    });
  }

  delete(id: string) {
    console.log(`Delete user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Deleted user with id: ${id}`, new Date()));
    return this.http.delete(`http://lab.wappier.com/user/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
      })
    });
  }
}
