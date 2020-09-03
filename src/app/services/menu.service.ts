import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private isLeftSliderOpen = new BehaviorSubject(false);
  private isUserProfileSliderOpen = new BehaviorSubject(false);

  // to get the state of hamburger menu
  isLeftSliderOpenObservable = this.isLeftSliderOpen.asObservable();
  // to get the state of user profile slider
  isUserProfileSliderOpenObservable = this.isUserProfileSliderOpen.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Method to open hamburger menu
   */
  openLeftMenu(): void {
    this.isLeftSliderOpen.next(true);
  }

  /**
   * Method to close hamburger menu
   */
  closeLeftMenu(): void {
    this.isLeftSliderOpen.next(false);
  }

  /**
   * Method to open user profile menu
   */
  openUserProfile(): void {
    this.isUserProfileSliderOpen.next(true);
  }

  /**
   * Method to close user profile menu
   */
  closeUserProfile(): void {
    this.isUserProfileSliderOpen.next(false);
  }

  getData(): Observable<any> {
    const url = 'http://localhost:5001/api/values';
    return this.http.get(url);
  }
}
