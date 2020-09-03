import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidePanelLeftComponent } from './slide-panel-left/slide-panel-left.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileSliderComponent } from './user-profile-slider/user-profile-slider.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { SpaHostComponent } from './spa-host/spa-host.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from 'src/app/services/route-reuse-strategy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';

// Third party
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SlidePanelLeftComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileSliderComponent,
    FloatingMenuComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: RouteReuseStrategy,
      useClass: MicroFrontendRouteReuseStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
