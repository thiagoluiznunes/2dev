import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import UserClass from './userClass';
import ICallback from '../../shared/types/icallback.types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserClass;
  oapi: string = environment.oapiUrl;

  constructor(private http: HttpClient) { }

  getUser(): UserClass {
    if (!this.user) {
      const [name, email, token] = JSON.parse(localStorage.getItem(environment.ci_userKey));
      this.user = new UserClass(name, email, token);
    }
    return this.user;
  }

  test(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
        response => {
          console.log('Response: ', response);
        },
        error => {
          console.log('ERROR ', error);
        }
      );
  }

  submit(url: string, user: UserClass, callback: ICallback): void {

    this.http.post<UserClass>(`${this.oapi}/${url}`, JSON.stringify(user))
      .subscribe(
        response => {
          console.log('POST REQUEST is successful', response);
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }

  login(user: UserClass, callback: ICallback): void {
    this.submit('login', user, callback);
  }

  signup(user: UserClass, callback: ICallback): void {
    this.submit('signup', user, callback);
  }

  logout(callback: ICallback): void {
    this.user = null;
    localStorage.removeItem(environment.ci_userKey);
    httpOptions.headers = httpOptions.headers.set('Authorization', '');

    if (callback) {
      callback(null);
    }
  }
}
