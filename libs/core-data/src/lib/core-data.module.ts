import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@capstone-project/core-data';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ],
})

export class CoreDataModule {}
