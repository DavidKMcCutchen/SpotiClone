import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { stringify } from 'querystring';


const client_id = 'eec823a801684e7bb05b9439c4cc4a9e'; // Your client id
const client_secret = '97e72558e6ff4557bcd94c73a55a7892'; // Your secret
const redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri
const scopes = 'user-read-private user-read-email';
const spotifyUrl = 'https://accounts.spotify.com/authorize';
const spotifyTokenUrl = 'https://accounts.spotify.com/api/token';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  async authenticateUser(code: string) {
    const { data } = await this.httpService.post(
      `https://accounts.spotify.com/api/token`,
      stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret
      })
    ).toPromise();

    if (!data) {
      return new HttpException('Invalid Request', 400);
    }
    return data
  };
}


