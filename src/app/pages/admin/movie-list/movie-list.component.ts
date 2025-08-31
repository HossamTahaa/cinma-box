import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/serach.component';
import { GenresComponent } from '../../website/genres/genres.component';
import { MovieCardComponent } from '../../website/movie-card/movie-card.component';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SearchComponent,
    GenresComponent,
    MovieCardComponent,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMoiveStream().subscribe((data) => {
      this.movies = data.results;
    });
  }

  nextPage() {
    this.movieService.nextPage();
  }

  prevPage(): void {
    this.movieService.prevPage();
  }
    handleSearchResults(results: any[]) {
    this.filteredMovies = results;
  }
  loadMoviesByGenre(list: any[]) {
     this.movies = list || [];
  }
  goToDetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }
}
