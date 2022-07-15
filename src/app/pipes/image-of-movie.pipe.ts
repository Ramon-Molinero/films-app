import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageOfMovie'
})
export class ImageOfMoviePipe implements PipeTransform {

  private url: string = 'https://image.tmdb.org/t/p';
  
  transform(image: string, size: string = 'w500'): string {

    const imgUrl = `${this.url}/${size}${image}`;

    if (!image) {
      return './assets/images/no-image-banner.jpg';
    }

    return imgUrl;
  }

}
