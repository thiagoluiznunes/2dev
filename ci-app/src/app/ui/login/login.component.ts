import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

import UserClass from '../user/userClass';

@Component({
  selector: 'ci-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserClass;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  getUser(): void {
    this.userService.getUser();
  }

  login(): void {
    this.userService.login(this.user, (err, response) => {

    });
  }
}
