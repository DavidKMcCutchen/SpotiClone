import { Injectable } from "@angular/core";
import { APIArtist } from "@capstone-project/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ArtistActions from './artist.actions';
import * as ArtistSelectors from './artist.selectors';
import * as fromArtists from './artist.reducer';



@Injectable({
    providedIn: 'root'
})

export class ArtistFacade {
    allArtists$ = this.store.pipe(
        map((state) => ArtistSelectors.getAllArtists(state)),
    )
    selectedArtists$ = this.store.pipe(select(ArtistSelectors.getSelectedArtist));
    loaded$ = this.store.pipe(select(ArtistSelectors.getArtistsLoaded));

    

        selectArtist(artistId: string) {
            this.dispatch(ArtistActions.selectArtist({ artistId }));
        };

        loadArtists() {
            this.dispatch(ArtistActions.loadArtists())
        };

        loadArtist(artistId: string) {
            this.dispatch(ArtistActions.loadArtist({ artistId }))
        };


        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromArtists.ArtistPartialState>,
            private actions$: ActionsSubject
        ) {}
}