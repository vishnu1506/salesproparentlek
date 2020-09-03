import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-user-profile-slider',
  templateUrl: './user-profile-slider.component.html',
  styleUrls: ['./user-profile-slider.component.scss']
})
export class UserProfileSliderComponent implements OnInit {

  isUserProfileOpen: any;
  public config: PerfectScrollbarConfigInterface = {};
  constructor(private menuService: MenuService) {
    this.isUserProfileOpen = menuService.isUserProfileSliderOpenObservable;
   }

  ngOnInit(): void {
  }

  closeUserProfile(): void {
    this.menuService.closeUserProfile();
  }

}
