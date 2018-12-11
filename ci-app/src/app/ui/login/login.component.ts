import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { MsgsService } from '../../shared/services/msgs.service';

import { User } from '../user/user';
import { UserValidate } from '../user/user-validate';

@Component({
  selector: 'ci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '');

  constructor(private userService: UserService, private msgs: MsgsService, private loginService: LoginService) {}

  ngOnInit() {
  }

  openModal(id: string): void {
    this.loginService.openModal(id);
  }

  closeModal(id: string): void {
    this.loginService.closeModal(id);
  }

  getUser(): UserValidate {
    // this.user = this.userService.getUser();
    return this.userService.getUser();
  }

  login(): void {
    console.log('Login function is working');
    // this.userService.login(this.user, (err, res) => {
    //   if (err) {
    //     return this.msgs.addError(err.errors);
    //   }
    //   console.log(res);
    //   window.location.reload();
    // });
  }
}
