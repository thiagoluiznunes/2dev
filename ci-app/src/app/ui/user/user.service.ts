import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import UserClass from './userClass'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserClass;
  api: string = environment.apiUrl;
  oapi: string = environment.oapiUrl;

  constructor(private http: HttpClient) { }

  getUser() {
    if (!this.user) {
      this.user = new UserClass('asd', 'asd', 'asd');
      // user = new User(JSON.parse(localStorage.getItem(environment.ci_userKey));
    }
  }
}
