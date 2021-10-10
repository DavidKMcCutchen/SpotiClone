import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'errorImage'
})

export class ErrorImagesPipe implements PipeTransform {

// Validates Images before Displaying them in View

  transform(images: any[]): string {
    if (!images) {
      console.log('!images');
      return 'assets/img/no-image.png'
    };

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no-image.png'
    }
  }

}
