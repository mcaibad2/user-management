import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {USERS} from '../mock-data/mock-users';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {HttpClient, HttpHeaders} from '@angular/common/http';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'api-token': '27140e3a-0e81-4a96-8e91-162cfb69cf69'
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(page): Observable<User[]> {
    return of(USERS);
  }

  // getUsers(page) {
  //   return this.http.get('http://lab.wappier.com/user/' + page, options);
  // }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user._id === id));
  }
}
