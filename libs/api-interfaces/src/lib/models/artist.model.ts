export interface APIArtist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export const emptyArtist: APIArtist = {
  external_urls: 
  {spotify: ''},
  followers: {
    href: null,
    total: 9999
  },
  genres: [],
  href: '',
  id: '',
  images: [],
  name: '',
  popularity: 101932,
  type: '',
  uri: ''
}
