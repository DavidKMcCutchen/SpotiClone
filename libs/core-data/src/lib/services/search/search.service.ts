import { Observable } from 'rxjs';
import { APISearch } from '@capstone-project/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './../global/global.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private global: GlobalService,
    private http: HttpClient
  ) { }


  getSearchFor(term: string): Observable<APISearch[]> {
    const searchUrl: string = `search?q=${ term }&type=track%2Cartist`;
    return this.http.get<APISearch[]>(this.global.getQuery(searchUrl)).pipe(
      tap((res) => console.log(res))
    )
  }


}


