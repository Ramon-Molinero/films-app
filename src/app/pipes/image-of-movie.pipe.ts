import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imageOfMovie'
})
export class ImageOfMoviePipe implements PipeTransform {

  private url: string = environment.imgPath;
  
  transform(image: string, size: string = 'w500'): string {

    const imgUrl = `${this.url}/${size}${image}`;

    if (!image) {
      return './assets/images/no-image-banner.jpg';
    }

    return imgUrl;
  }

}
