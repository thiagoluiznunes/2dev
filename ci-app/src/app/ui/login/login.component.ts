import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { MsgsService } from '../../shared/services/msgs.service';

@Component({
  selector: 'ci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};
  loginMode: boolean;
  signupMode: boolean;
  forgotMode: boolean;

  constructor(private userService: UserService, private msgs: MsgsService, private loginService: LoginService) {}

  ngOnInit() {
  }

  openModal(id: string, option: string): void {
    this.loginService.setModalOption(this, option);
    this.loginService.openModal(id);
  }

  closeModal(id: string): void {
    this.loginService.closeModal(id);
  }

  getUser(): any {
    // this.user = this.userService.getUser();
    this.userService.getUser();
  }

  login(): any {
    this.userService.login(this.user, (err, res) => {
      if (err) {
        return this.msgs.addError(err.errors);
      }
      window.location.reload();
    });
  }

  signup(): any {
    this.userService.signup(this.user, (err, res) => {
      if (err) {
        return this.msgs.addError(err.error.erros);
      }
      this.msgs.addSuccess(res.messages);
      this.login();
    });
  }

  logout() {
    this.userService.logout();
    window.location.reload();
  }
}
