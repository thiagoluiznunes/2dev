import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import ICallback from '../../shared/types/icallback.types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  oapi = environment.oapiUrl;

  constructor(private http: HttpClient) { }

  validateToken(token: any, callback: ICallback): any {
    if (token) {
      this.http.post<any>(`${this.oapi}/validateToken`, {token})
      .subscribe(
        response => {
          if (!response.valid) {
            console.log('Error to validate!');
          } else {
            // httpOptions.headers = httpOptions.headers.set('Authorization', `${}`);
          }
        },
        error => {
          if (callback) {
            callback(error);
          }
        }
      );
    } else {
      if (callback) {
        callback('Invalid token!');
      }
    }
  }

  isAuthenticated(): any {
    // TODO: User authentication and validateToken
    this.user = null;
    if (this.user && !this.user.isValid) {
      validateToken(this.user.token, (err, valid) => {
        if (err) {
          return false;
        } else {
          this.user.isValid = true;
          // httpOptions.headers = httpOptions.headers.set('Authorization', `${user.token}`);
          return true;
        }
      });
    }
  }
}
