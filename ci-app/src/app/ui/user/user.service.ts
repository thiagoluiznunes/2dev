import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import UserClass from './userClass';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserClass;
  oapi: string = environment.oapiUrl;

  constructor(private http: HttpClient) { }

  getUser(): void {
    if (!this.user) {
      this.user = new UserClass('asd', 'asd', 'asd');
      // user = new User(JSON.parse(localStorage.getItem(environment.ci_userKey));
    }
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

  submit(url: string, user: UserClass, callback: () => void): void {

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

  login(user: UserClass, callback: () => void): void {
    this.submit('login', user, callback);
  }

  signup(user: UserClass, callback: () => void): void {
    this.submit('signup', user, callback);
  }

  logout(callback: () => void): void {
    this.user = null;
    localStorage.removeItem(environment.ci_userKey);

    // if (callback) callback(null);
  }
}
