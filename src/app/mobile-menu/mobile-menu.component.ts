import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

  openLeftMenu(): void {
    this.menuService.openLeftMenu();
  }

  openUserProfileSlider(): void {
    this.menuService.openUserProfile();
  }

}
