import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { MsgsService } from '../../shared/services/msgs.service';

import UserClass from '../user/userClass';

@Component({
  selector: 'ci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserClass;

  constructor(private userService: UserService, private msgs: MsgsService) {}

  ngOnInit() {
  }

  getUser(): void {
    this.user = this.userService.getUser();
  }

  login(): void {
    this.userService.login(this.user, (err, response) => {
      if (err) {
        return this.msgs.addError(err.errors);
      }
      window.location.reload();
    });
  }
}
