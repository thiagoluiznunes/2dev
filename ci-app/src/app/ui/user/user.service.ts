import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import UserClass from './userClass';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserClass;
  api: string = environment.apiUrl;
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

    this.http.post<UserClass>(url, JSON.stringify(user))
      .subscribe(
        response => {
          console.log('POST REQUEST is successful', response);
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }
}
