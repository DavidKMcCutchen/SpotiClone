import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const BASE_URL = 'https://api.spotify.com/v1';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(
    private http: HttpClient
  ) { }

  // Common URL

  getQuery(query: string) {
    return `${BASE_URL}/${query}`
  };
}

