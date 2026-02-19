import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
/*import { Movie } from './movies.entity';*/

@ApiTags('movies')
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  /* @ApiOkResponse({ type: Movie, isArray: true })  // Movie como tipo para Swagger
   async getMovies(): Promise<Movie[]> {
     return this.moviesService.listMovies();
   }*/
  /*async getMovies(): Promise<any> {
      return [{ name: 'Error intencionado' }];
  }*/
  async getMovies(): Promise<CreateMovieDto[]> {
    return this.moviesService.listMovies();
  }
}
