export interface APIArtistAlbums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface AlbumItem {
  album_group: AlbumGroup;
  album_type: AlbumGroup;
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
  type: AlbumGroup;
  uri: string;
}

export enum AlbumGroup {
  Album = "album",
  Single = "single",
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: Type;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum Type {
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
