import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    auth: AuthService): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAuthenticated()) {
      // TODO: Validate user by router vaidateToken()
      // ...
      // ...
      // ...
      return true;
    }
    return false;
  }
}
