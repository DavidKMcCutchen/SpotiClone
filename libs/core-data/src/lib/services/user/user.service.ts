import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAPI } from '@capstone-project/api-interfaces';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';


const userUrl = 'me';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private global: GlobalService,
    private http: HttpClient
  ) { }

  getUserProfile(): Observable<UserAPI> {
    return this.http.get<UserAPI>(this.global.getQuery(userUrl)).pipe(
      tap((res) => console.log(res))
    )
  };

  getUsersProfile(user_id: string): Observable<UserAPI> {
    const usersUrl = `users/${user_id}`
    return this.http.get<UserAPI>(this.global.getQuery(usersUrl))
  }

}
