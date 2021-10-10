import { ErrorImagesPipe } from './pipes/error-images.pipes';
import { ErrorKeysPipe } from './pipes/error-keys.pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UriPipe } from './pipes/uri.pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorKeysPipe, ErrorImagesPipe, UriPipe],
  exports: [ErrorKeysPipe, ErrorImagesPipe, UriPipe]
})
export class PipesModule {}
