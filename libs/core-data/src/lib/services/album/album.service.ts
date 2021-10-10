import { HttpClient } from '@angular/common/http';
import { APIAlbums } from '@capstone-project/api-interfaces';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";

const albumsUrl = 'albums';


@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) { }

  getAlbums(): Observable<APIAlbums[]> {
    return this.http.get<APIAlbums[]>(this.global.getQuery(albumsUrl)).pipe(
      tap((res) => console.log(res))
    )
  };

  getAlbum(albumId: string): Observable<APIAlbums> {
    const albumUrl: string = `albums/${ albumId }`;
    return this.http.get<APIAlbums>(this.global.getQuery(albumUrl))
  };

}

