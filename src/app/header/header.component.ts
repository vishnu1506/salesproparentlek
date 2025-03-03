import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
