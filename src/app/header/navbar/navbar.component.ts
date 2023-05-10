import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../../styles.scss']
})
export class NavbarComponent {
  navInfo: string[];
  isActive: boolean = false;
  isDisabled: boolean = true;
  isMenuOpen: boolean = false;

  constructor() {
    this.navInfo = ["Who We Are", "What We Do", "Zallpy Culture", "Industries", "Career", "Blog"];
  }

  toggle() {
    this.isActive = !this.isActive;
    this.isDisabled = !this.isDisabled;
    this.isMenuOpen = !this.isMenuOpen;
  }
}
