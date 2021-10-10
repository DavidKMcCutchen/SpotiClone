import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '@capstone-project/core-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public openSideBar: boolean = false;
  public activeLanguage: string = 'en';
  public moreLanguages: boolean = false;

  constructor( private translate: TranslateService ) {
    // set default language
    this.translate.setDefaultLang(this.activeLanguage);
  }

  ngOnInit(): void { /*empty*/ }

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
  }
}
