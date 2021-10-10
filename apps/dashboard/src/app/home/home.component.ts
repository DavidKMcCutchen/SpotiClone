import { NewReleasesItem } from '@capstone-project/api-interfaces';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { GlobalService, NewReleasesService } from '@capstone-project/core-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: NewReleasesItem[] = [];

constructor(
  private newReleasesService: NewReleasesService,
  private global: GlobalService,
  private translate: TranslateService
) {}

  ngOnInit(): void {
    this.getNewReleases();
  };

  getNewReleases(): void {
    this.newReleasesService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete');
    })
  };

  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView()
  }
};