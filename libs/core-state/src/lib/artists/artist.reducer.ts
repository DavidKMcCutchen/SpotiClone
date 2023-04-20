import { AlbumItem, APIArtist } from "@capstone-project/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ArtistActions from './artist.actions';

// Feature Keys
export const ARTIST_FEATURE_KEY = 'artists';
export const ARTIST_ALBUMS_FEATURE_KEY = 'artistAlbums';

// States
export interface ArtistState extends EntityState<APIArtist> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};
export interface ArtistAlbumsState extends EntityState<AlbumItem> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

// Partial States
export interface ArtistPartialState {
    readonly [ARTIST_FEATURE_KEY]: ArtistState
};
export interface ArtistAlbumsPartialState {
    readonly [ARTIST_ALBUMS_FEATURE_KEY]: ArtistAlbumsState
};

// Adapters

export const artistAdapter: EntityAdapter<APIArtist> = createEntityAdapter<APIArtist>({ selectId: (a) => a.id});

export const artistAlbumsAdapter: EntityAdapter<AlbumItem> = createEntityAdapter<AlbumItem>({ selectId: (a) => a.id});

// Initial States

export const initialArtistState: ArtistState = artistAdapter.getInitialState(
    {
        loaded: false
    }
);

export const initialArtistAlbumsState: ArtistAlbumsState = artistAlbumsAdapter.getInitialState(
    {
        loaded: false
    }
);

// On Failed

const onFailed = (state, { error }): ArtistState => ({ ...state, error});
const onFailedArtistAlbums = (state, { error }): ArtistAlbumsState => ({ ...state, error});

// On Dispatch

const onDispatch = (state, action): ArtistState => ({
    ...state,
    loaded: false,
    error: null
});

const onDispatchArtistAlbums = (state, action): ArtistAlbumsState => ({
    ...state,
    loaded: false,
    error: null
});

// Reducer

const _artistReducer = createReducer(
    initialArtistState,
    on(
        ArtistActions.loadArtistFailed,
        ArtistActions.loadArtistsFailed,
        onFailed
    ),
    on(
        ArtistActions.loadArtist,
        ArtistActions.loadArtists,
        onDispatch
    ),
    on(
        ArtistActions.loadArtistSuccess, (state, { artist }) =>
        artistAdapter.upsertOne(artist, {...state, loaded: true})
    ),
    on(
        ArtistActions.selectArtist, (state, { artistId }) => ({
            ...state,
            selectedId: artistId
        })
    ),
    on(
        ArtistActions.loadArtistsSuccess, (state, { artists }) =>
        artistAdapter.setAll(artists, {...state, loaded: true})
    ),
);

// Reducer

const _artistAlbumsReducer = createReducer(
    initialArtistAlbumsState,
    on(
        ArtistActions.loadArtistAlbumsFailed,
        onFailedArtistAlbums
    ),
    on(
        ArtistActions.loadArtistAlbums,
        onDispatchArtistAlbums
    ),
    // on(
    //     ArtistActions.loadArtistAlbumsSuccess, (state, { artistAlbums }) =>
    //     artistAlbumsAdapter.upsertMany(artistAlbums, {...state, loaded: true})
    // ),
    on(
        ArtistActions.loadArtistAlbumsSuccess, (state, { artistAlbums }) =>
        artistAlbumsAdapter.setAll(artistAlbums, {...state, loaded: true})
    ),
)

export function artistReducer(
    state: ArtistState | undefined,
    action: Action
) {
    return _artistReducer(state, action)
}

export function artistAlbumsReducer(
    state: ArtistAlbumsState | undefined,
    action: Action
) {
    return _artistAlbumsReducer(state, action)
}