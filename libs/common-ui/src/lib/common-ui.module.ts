import { PipesModule } from '@capstone-project/pipes';
import { MaterialModule } from '@capstone-project/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { CoreDataModule, TokenInterceptor } from '@capstone-project/core-data';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreDataModule,
    PipesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  exports: [LoginComponent, CallbackComponent]
})
export class CommonUiModule {}
