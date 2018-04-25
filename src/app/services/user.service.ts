import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {USERS} from '../mock-data/mock-users';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HistoryService} from './history.service';
import {HistoryItem} from '../model/historyItem';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
  })
};

@Injectable()
export class UserService {

  users: User[];

  constructor(private http: HttpClient, private historyService: HistoryService) {
  }

  createUser(user: User) {
    console.log(`Created user with name: ${user.name}`);
    this.historyService.create(new HistoryItem(`Created user with name: ${user.name}`, new Date()));
    this.users.push(user);
  }

  readUsers(page): Observable<User[]> {
    console.log(`Get users`);
    this.historyService.create(new HistoryItem(`Got users`, new Date()));
    this.users = USERS;
    return of(this.users);
  }

  // getUsers(page) {
  //   return this.http.get('http://lab.wappier.com/user/' + page, options);
  // }

  readUser(id: number): Observable<User> {
    console.log(`Read user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Read user with id: ${id}`, new Date()));
    return of(USERS.find(user => user._id === id));
  }

  updateUser(id: number) {
    console.log(`Update user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Updated user with id: ${id}`, new Date()));
  }

  delete(id: number) {
    console.log(`Delete user with id: ${id}`);
    this.historyService.create(new HistoryItem(`Deleted user with id: ${id}`, new Date()));
    this.users = this.users.filter(obj => {
      return obj._id !== id;
    });
    console.log('Test');
  }
}
