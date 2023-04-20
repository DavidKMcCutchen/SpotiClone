import { createAction, props } from "@ngrx/store";
import { AlbumItem, APIArtistAlbums, APIArtist, APIArtistTracks, Track, Artist, APIRelatedArtists } from '@capstone-project/api-interfaces';


// Select Entity 

export const selectArtist = createAction(
    '[ARTIST] SELECT ARTIST',
    props<{ artistId: string}>()
);

// Load All Entities

export const loadArtists = createAction(
    '[ARTISTS] LOAD ARTISTS'
);

export const loadArtistsSuccess = createAction(
    '[ARTISTS] LOAD ARTISTS SUCCESS',
    props <{artists: APIArtist[]}>()
);

export const loadArtistsFailed = createAction(
    '[ARTISTS] LOAD ARTISTS',
    props <{error: any}>()
);

// Load Single Entity

export const loadArtist = createAction(
    '[ARTIST] LOAD ARTIST',
    props<{ artistId: string}>()
);

export const loadArtistSuccess = createAction(
    '[ARTIST] LOAD ARTIST SUCCESS',
    props <{artist: APIArtist}>()
);

export const loadArtistFailed = createAction(
    '[ARTIST] LOAD ARTIST',
    props <{error: any}>()
);

// Load Artist Albums

export const loadArtistAlbums = createAction(
    '[ARTIST] LOAD ARTIST',
    props<{ artistId: string}>()
);

export const loadArtistAlbumsSuccess = createAction(
    '[ARTIST] LOAD ARTIST SUCCESS',
    props <{artistAlbums: AlbumItem[]}>()
);

export const loadArtistAlbumsFailed = createAction(
    '[ARTIST] LOAD ARTIST',
    props <{error: any}>()
);