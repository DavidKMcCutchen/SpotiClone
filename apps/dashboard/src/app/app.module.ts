import { CommonUiModule } from '@capstone-project/common-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@capstone-project/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule, TokenInterceptor } from "@capstone-project/core-data";
import { CoreStateModule } from "@capstone-project/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@capstone-project/environment';
import { UiLoginModule } from '@capstone-project/ui-login';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from 'libs/common-ui/src/lib/nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SearchModalComponent } from './search/search-modal/search-modal.component';
import { SearchArtistItemComponent } from './search/search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './search/search-track-item/search-track-item.component';
import { PipesModule } from 'libs/pipes/src/lib/pipes.module';
import { ArtistComponent } from './artist/artist.component';
import { ArtistAlbumsComponent } from './artist/artist-albums/artist-albums.component';
import { ArtistTopTrackComponent } from './artist/artist-top-track/artist-top-track.component';
import { NewReleaseItemComponent } from './home/new-release-item/new-release-item.component';
import { AlbumComponent } from './album/album.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, SearchModalComponent, SearchArtistItemComponent, SearchTrackItemComponent, ArtistComponent, ArtistAlbumsComponent, ArtistTopTrackComponent, NewReleaseItemComponent, AlbumComponent, NavBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CommonUiModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })],
    providers: [NavBarComponent,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}