import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIAlbums } from '@capstone-project/api-interfaces';
import { SearchService, AlbumService } from '@capstone-project/core-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() public showModal: boolean = false;
  artistsList: any[] = [];
  tracksList: any[] = [];
  moreArtists: boolean = false;
  moreTracks: boolean = false;
  activeLanguage: string = 'en';


  constructor(
    private searchService: SearchService,
    private router: Router,
  ) { }

  ngOnInit(): void { };

  // search both artist and track
  search(term: string): void {
    console.log('Term to find:', term);

  // update url with term
  this.router.navigate(['search', term]);

  this.searchService.getSearchFor(term).subscribe((data: any) => {
    this.artistsList = data.artists.items;
    this.tracksList = data.tracks.items;

    console.log('Data:', data);

    if (this.artistsList.length === 0 && this.tracksList.length === 0) {
      this.showModal = true;
    }

  }, (err) => {
    console.log('Error:', err);
    console.error(err.message);
  }, () => {
    console.log('Complete!');
  });
}
  seeMoreArtists(): void {
    this.moreArtists = !this.moreArtists;
  };

  seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  };

  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView();
  };
}