import { AlbumItem, APIArtistAlbums, APIArtist, APIArtistTracks, Track, Artist, APIRelatedArtists } from '@capstone-project/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '@capstone-project/core-data';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const artistsUrl = 'artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private http: HttpClient,
    private global: GlobalService) { }

  getArtists(): Observable<APIArtist[]> {
    return this.http.get<APIArtist[]>(this.global.getQuery(artistsUrl)).pipe(
      tap((res) => console.log(res))
    );
  };

  getArtist(artistId: string): Observable<APIArtist> {
    const artistUrl = `artists/${artistId}`;
    return this.http.get<APIArtist>(this.global.getQuery(artistUrl))
  };

  getArtistAlbums(artistId: string): Observable<AlbumItem[]> {
    const artistAlbumUrl = `artists/${artistId}/albums`;
    return this.http.get<APIArtistAlbums>(this.global.getQuery(artistAlbumUrl)).pipe(
    tap((res) => console.log(res)),
    map((response) => response.items));
  };

  getArtistsTopTracks(artistId: string): Observable<Track[]> {
    const artistTopTracksUrl = `artists/${artistId}/top-tracks?country=us`;
    return this.http.get<APIArtistTracks>(this.global.getQuery(artistTopTracksUrl)).pipe(
      tap((res) => console.log(res)),
      map((response) => response.tracks)
    );
  };

  getRelatedArtists(artistId: string): Observable<Artist[]> {
    const relatedArtistsUrl = `artists/${artistId}/related-artists`;
    return this.http.get<APIRelatedArtists>(this.global.getQuery(relatedArtistsUrl)).pipe(
      tap((res) => console.log(res)),
      map((response) => response.artists)
    );
  };
};
