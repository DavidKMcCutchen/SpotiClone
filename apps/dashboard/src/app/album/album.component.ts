import { APIAlbums } from '@capstone-project/api-interfaces';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '@capstone-project/core-data';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albumId: string = '';
  album: APIAlbums | null = null;


  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getAlbum();
  };

  getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.albumId = params.id;
      console.log('Activated Route Id', params.id)
    });
  }

  getAlbum(): void {
    this.albumService.getAlbum(this.albumId).subscribe((album: APIAlbums) => {
      this.album = album;
      console.log('Album Data:', album);
    }, (err) => {
      console.log('Album Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Album Complete')
    });
  }

  goBack() {
    this.location.back();
  }

}
