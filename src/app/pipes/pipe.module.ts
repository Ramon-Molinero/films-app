import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageOfMoviePipe } from './image-of-movie.pipe';



@NgModule({
  declarations: [
    ImageOfMoviePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageOfMoviePipe
  ]
})
export class PipeModule { }
