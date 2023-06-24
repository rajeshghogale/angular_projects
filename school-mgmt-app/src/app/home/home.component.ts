import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  events: string[] = [];
  opened: boolean = false;

  mobileQuery: MediaQueryList;

  fillerNav = [
    {id:'HOME', displayTxt : 'Dashboard', icon: 'home', route:'home', isActive: true},
    {id:'CLASSES', displayTxt : 'Classes', icon: 'view_list', route:"classes", isActive: false},
    {id:'TEACHERS', displayTxt : 'Teachers', icon: 'view_list', route:'teachers', isActive: false},
    {id:'MYPROFILE', displayTxt : 'My Profile', icon: 'date_range', route:'/my-profile', isActive: false},
    {id:'CONFIG', displayTxt : 'Settings', icon: 'settings', route:'/config', isActive: false}
  ]

  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  navLinkClick(nav: any) {
    console.log(nav)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
