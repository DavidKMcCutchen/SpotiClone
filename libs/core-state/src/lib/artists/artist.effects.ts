import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import * as ArtistActions from './artist.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import {
  AlbumItem,
  APIArtistAlbums,
  APIArtist,
  Artist,
} from '@capstone-project/api-interfaces';
import { ArtistService } from '@capstone-project/core-data';

@Injectable()
export class ArtistEffects {
  loadArtist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArtistActions.loadArtist),
      fetch({
        run: (action) =>
          this.artistService
            .getArtist(action.artistId)
            .pipe(
              map((artist: APIArtist) =>
                ArtistActions.loadArtistSuccess({ artist })
              )
            ),
        onError: (action, error) => ArtistActions.loadArtistFailed({ error }),
      })
    );
  });

  loadArtists$ = createEffect(() =>
  {return this.actions$.pipe(
      ofType(ArtistActions.loadArtists),
      fetch({
          run: () =>
            this.artistService
            .getArtists()
            .pipe(
                map((artists: APIArtist[]) => ArtistActions.loadArtistsSuccess({ artists }))
            ),
        onError: (action, error) => ArtistActions.loadArtistsFailed({ error })     
      })
  )} )

  loadArtistAlbums$ = createEffect(() =>
  {return this.actions$.pipe(
      ofType(ArtistActions.loadArtistAlbums),
      fetch({
          run: (action) =>
            this.artistService
            .getArtistAlbums(action.artistId)
            .pipe(
                map((artistAlbums: AlbumItem[]) => ArtistActions.loadArtistAlbumsSuccess({ artistAlbums }))
            ),
        onError: (action, error) => ArtistActions.loadArtistAlbumsFailed({ error })     
      })
  )} )

  constructor(
    private actions$: Actions,
    private artistService: ArtistService
  ) {}
}
