import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss']
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() album: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  seeAlbum(album: any): void {
    this.router.navigate(['/album', album.id]);
  };

}
