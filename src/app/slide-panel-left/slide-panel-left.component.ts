import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-slide-panel-left',
  templateUrl: './slide-panel-left.component.html',
  styleUrls: ['./slide-panel-left.component.scss']
})
export class SlidePanelLeftComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  isMenuOpen = false;
  isSubMenuOpen = false;
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

  closeLeftMenu(): void {
    this.menuService.closeLeftMenu();
  }

  someApiCall() {
    this.menuService.getData().subscribe(data => {
      console.log(data);
    });
  }

}
