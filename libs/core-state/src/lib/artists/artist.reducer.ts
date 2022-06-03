import { APIArtist } from "@capstone-project/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ArtistActions from './artist.actions';

export const ARTIST_FEATURE_KEY = 'artists';

export interface ArtistState extends EntityState<APIArtist> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface ArtistPartialState {
    readonly [ARTIST_FEATURE_KEY]: ArtistState
};

export const artistAdapter: EntityAdapter<APIArtist> = createEntityAdapter<APIArtist>({ selectId: (a) => a.id});

export const initialArtistState: ArtistState = artistAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): ArtistState => ({ ...state, error});

const onDispatch = (state, action): ArtistState => ({
    ...state,
    loaded: false,
    error: null
});

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
)

export function artistReducer(
    state: ArtistState | undefined,
    action: Action
) {
    return _artistReducer(state, action)
}