import { emptyArtist } from "@capstone-project/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { artistAdapter, ArtistState, ARTIST_FEATURE_KEY } from "./artist.reducer";

export const getArtistState = createFeatureSelector<ArtistState>(ARTIST_FEATURE_KEY);

const { selectAll, selectEntities } = artistAdapter.getSelectors();

export const getArtistsLoaded = createSelector(
    getArtistState,
    (state: ArtistState) => state.loaded
);

export const getArtistError = createSelector(
    getArtistState,
    (state: ArtistState) => state.error
);

export const getAllArtists = createSelector(
    getArtistState,
    (state: ArtistState) => selectAll(state)
);

export const getArtistEntities = createSelector(
    getArtistState,
    (state: ArtistState) => selectEntities(state)
);

export const getSelectedArtistId = createSelector(
    getArtistState,
    (state: ArtistState) => state.selectedId
);

export const getSelectedArtist = createSelector(
    getArtistEntities,
    getSelectedArtistId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyArtist
);