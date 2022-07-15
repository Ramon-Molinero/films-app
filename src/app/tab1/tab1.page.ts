import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ResponseMDB, Movie } from '../interface/movies.interfaces';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  moviesOfLastMoth: Movie[] = [];

  slideOpts: SwiperOptions = {
    
    pagination: false,
    slidesPerView: 1.3,
    freeMode: true,
    
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: false,
    // },
  
  };

  constructor(private moviesService: MoviesService) {}

  async ngOnInit(): Promise<void> {
    // this.moviesService.getLastMovies().subscribe((response) => {
    //   this.moviesOfLastMoth = response.results;
    //   console.log(this.moviesOfLastMoth);
    // });

    this.moviesOfLastMoth = (await this.moviesService.getLastMoviesPromise()).results;
    
  }
}
