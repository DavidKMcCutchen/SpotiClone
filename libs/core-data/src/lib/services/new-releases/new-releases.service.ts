import { FormattedNewReleases, APINewReleases } from '@capstone-project/api-interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { GlobalService } from '@capstone-project/core-data';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewReleasesService {
  newReleasesUrl: string = 'browse/new-releases';


  constructor(
    private global: GlobalService,
    private http: HttpClient
  ) { }

  getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.http.get<APINewReleases>(this.global.getQuery(this.newReleasesUrl)).pipe(
      map((response: APINewReleases) => {
        if (!response) {
          throw new Error('Value Expected');
        } else {
          const formattedItems: FormattedNewReleases[] = response.albums.items.map((
            { id, images, name, artists, type}) => (
            { id, images, name, artists, type}
          ));
          return formattedItems;
      }
  }),
  catchError((err) => {
    throw new Error(err.message);
  }))
}
}
