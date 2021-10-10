export interface FormattedNewReleases{
  id: string;
  images: Image[];
  name: string;
  artists: Artist[];
  type: string;
}

export interface APINewReleases {
  albums: Albums;
}

export interface Albums {
  href: string;
  items: NewReleasesItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface NewReleasesItem {
  album_type: 'album' | 'single';
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: 'album' | 'single';
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ArtistType {
  Artist = "artist",
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export enum ReleaseDatePrecision {
  Day = "day",
}
