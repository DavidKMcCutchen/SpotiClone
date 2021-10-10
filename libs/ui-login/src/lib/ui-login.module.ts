import { PipesModule } from './../../../pipes/src/lib/pipes.module';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildComponent } from './wild/wild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, PipesModule, ReactiveFormsModule],
  declarations: [ WildComponent],
  exports: [ WildComponent]
})
export class UiLoginModule {}
