import { ActionReducerMap } from "@ngrx/store";
import * as fromArtists from './artists/artist.reducer';


export interface AppState {
    [fromArtists.ARTIST_FEATURE_KEY]: fromArtists.ArtistState;

};

export const reducers: ActionReducerMap<AppState> = {
    [fromArtists.ARTIST_FEATURE_KEY]: fromArtists.artistReducer,

};