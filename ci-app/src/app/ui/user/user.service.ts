import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

// import { User } from './user';
// import { UserValidate } from './user-validate';
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
  // user = new UserValidate('', '', '');
  user = null;
  oapi = environment.oapiUrl;

  constructor(private http: HttpClient) { }

  getUser(): any {
    if (!this.user) {
      // const [name, email, token] = JSON.parse(localStorage.getItem(environment.ci_userKey));
      // this.user = new UserValidate(name, email, token);
      this.user = JSON.parse(localStorage.getItem(environment.ci_userKey));
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

  submit(url: string, user: any, callback: ICallback): void {
    this.http.post<any>(`${this.oapi}/${url}`, JSON.stringify(user))
      .subscribe(
        response => {
          localStorage.setItem(environment.ci_userKey, JSON.stringify(response));
          if (callback) {
            callback(null, response);
          }
        },
        error => {
          if (callback) {
            callback(error);
          }
        }
      );
  }

  login(user: any, callback: ICallback): void {
    this.submit('login', user, callback);
  }

  signup(user: any, callback: ICallback): void {
    this.submit('signup', user, callback);
  }

  logout(callback?: ICallback): void {
    this.user = null;
    localStorage.removeItem(environment.ci_userKey);
    httpOptions.headers = httpOptions.headers.set('Authorization', '');

    if (callback) {
      callback(null);
    }
  }
}
