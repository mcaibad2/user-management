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

  createUser(user: User, file: File) {
    console.log(`Created user with name: ${user.name}`);
    this.historyService.create(new HistoryItem(`Created user with name: ${user.name}`, new Date()));
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('birthday', user.birthday);
    formData.append('country', user.country);
    formData.append('avatar', file, file.name);
    return this.http.post('http://lab.wappier.com/user', formData, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
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

  updateUser(id: string) {
    console.log(`Update user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Updated user with id: ${id}`, new Date()));
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
