import { UserAPI, Image } from '@capstone-project/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@capstone-project/core-data';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { AuthService } from 'libs/core-data/src/lib/services/authentication/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  openSideBar: boolean = false;
  activeLanguage: string = 'en';
  moreLanguages: boolean = false;
  user: any | null = null;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private authService: AuthService
    ) {
    // set default language
    this.translate.setDefaultLang(this.activeLanguage);
  }

  ngOnInit(): void {
    this.getUser();
  }

  // update variable which controls side bar visibility
  openOrCloseNav(): void {
    this.openSideBar = !this.openSideBar;
  }

  // switch language
  switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }

  seeLanguages(): void {
    this.moreLanguages = !this.moreLanguages;
  };

  getUser(): void {
    this.userService.getUserProfile().subscribe((user: UserAPI) => {
      this.user = user;
      console.log('User Data:', user);
    }, (err) => {
      console.log('User Error:', err);
      console.error(err.message);
    }, () => {
      console.log('User Complete')
    });
  };


  logout() {
    this.authService.logout();
  }


}
