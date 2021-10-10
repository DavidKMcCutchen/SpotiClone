import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectEnvironment, PROJECT_ENVIRONMENT } from "@capstone-project/environment";


export const TOKEN_NAME = 'cs-sample::token';
export const MODEL = 'auth';

const client_id = 'eec823a801684e7bb05b9439c4cc4a9e'; // Your client id
const client_secret = '97e72558e6ff4557bcd94c73a55a7892'; // Your secret
const redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri
const scopes = 'user-read-private user-read-email';
const spotifyUrl = 'https://accounts.spotify.com/authorize';
const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(PROJECT_ENVIRONMENT) private config: ProjectEnvironment,
    private http: HttpClient
  ) {}

  getToken(): string | null {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string | null): void {
    localStorage.setItem(TOKEN_NAME, token ?? 'null');
  }

  login() {
    window.location.href = `${spotifyUrl}?client_id=${client_id}&response_type=code&scope=${scopes}&redirect_uri=${redirect_uri}&show_dialog=true`
  };



  handleRedirectCallback(code: string) {
    this.http.post('http://localhost:3333/api/auth', { code }).subscribe((res: any) => {
      console.log(res)
      this.setToken(res.access_token)
    })
  }

  requestToken() {};

  logout(): void {
    this.setToken(null);
  };

  register(): void {
  }
}

