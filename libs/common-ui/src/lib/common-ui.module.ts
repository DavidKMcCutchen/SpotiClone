import { SharedTranslate } from './translate/shared.module';
import { UserComponent } from './user/user.component';
import { PipesModule } from '@capstone-project/pipes';
import { MaterialModule } from '@capstone-project/material';
import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { CoreDataModule, TokenInterceptor } from '@capstone-project/core-data';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from '..';

@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent,
    UserComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    CoreDataModule,
    PipesModule,
    SharedTranslate,
    ApplicationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  exports: [LoginComponent, CallbackComponent, UserComponent]
})
export class CommonUiModule {}
