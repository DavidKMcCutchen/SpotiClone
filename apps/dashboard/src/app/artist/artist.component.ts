import { ArtistService, GlobalService } from '@capstone-project/core-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ArtistFacade } from '@capstone-project/core-state';
import { APIArtist } from '@capstone-project/api-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artistId: string = '';
  artist: any | null = null;
  topTracks: any[] = [];
  albums: any[] = [];
  moreAlbums: boolean = false;
  moreTracks: boolean = false;
  selectedArtist$: Observable<APIArtist> = this.artistFacade.selectedArtists$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private artistService: ArtistService,
    private artistFacade: ArtistFacade
  ) { }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getArtist();
    this.getTopTracks();
    this.getAlbums();
  };

  getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.artistId = params.id;
      console.log('Activated Route Id', params.id)
    });
  };

  // getArtist(): Observable<APIArtist> {
  //   return this.artistFacade.loadArtist(this.artistId).subscribe((artist: APIArtist) => (
  //     this.artist = artist ))
  // };

  getArtist(): void {
    this.artistService.getArtist(this.artistId).subscribe((artist: any) => {
      this.artist = artist;
      console.log('Artist Data:', artist);
    }, (err) => {
      console.log('Artist Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Artist Complete');
    });
  };

  getTopTracks(): void {
    this.artistService.getArtistsTopTracks(this.artistId).subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log('Top Tracks Data:', topTracks);
    }, (err) => {
      console.log('Artist Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Artist Complete');
    });
  };

  getAlbums(): void {
    this.artistService.getArtistAlbums(this.artistId).subscribe((albums: any) => {
      this.albums = albums;
      console.log('Albums Data:', albums);
    }, (err) => {
      console.log('Albums Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Albums Complete');
    });
  };

  seeMoreAlbums(): void {
    this.moreAlbums = !this.moreAlbums;
  };

  seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  };

  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView();
  };

}
