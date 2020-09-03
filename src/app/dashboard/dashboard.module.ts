import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { QuickAccessTilesComponent } from './quick-access-tiles/quick-access-tiles.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [DashboardComponent, QuickAccessTilesComponent, NewArrivalsComponent, PeopleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
