import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-artist-item',
  templateUrl: './search-artist-item.component.html',
  styleUrls: ['./search-artist-item.component.scss']
})
export class SearchArtistItemComponent implements OnInit {
  @Input() artist: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigates to artist

  navigate(artist: any): void {
    console.log('id', artist.id);
    this.router.navigate(['/artist', artist.id])
  };

}
