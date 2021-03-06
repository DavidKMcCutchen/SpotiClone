import { UserComponent } from 'libs/common-ui/src/lib/user/user.component';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { CallbackComponent, LoginComponent } from '@capstone-project/common-ui';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { FeaturesUnAuthGuard } from '@capstone-project/core-data';
import { WildComponent } from '@capstone-project/ui-login';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';


const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'callback', component: CallbackComponent },
  {path: 'home', component: HomeComponent},
  {path: 'wild', component: WildComponent },
  {path: 'login', component: LoginComponent },
  {path: 'search', component: SearchComponent},
  {path: 'search/:term', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent },
  {path: 'album/:id', component: AlbumComponent },
  {path: 'user', component: UserComponent},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }