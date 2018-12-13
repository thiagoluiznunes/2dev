import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classToggle(): void {
    const navs = document.querySelectorAll('.Navbar__Items');
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  onClickToggle(): void {
    this.classToggle();
  }
}
