import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../admin/loading/loading.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css',
})
export class GenresComponent {
  genres: any[] = [];
  loading = false;
  @Output() moviesByGenre = new EventEmitter<any[]>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTheGenre();
  }
  getTheGenre() {
    this.movieService.getGenre().subscribe((res: any) => {
      this.genres = res.genres;
    });
  }

  selectGenre(genreId: string) {
    if (!genreId) {
      this.moviesByGenre.emit([]);
      return;
    }

    this.loading = true;
    this.movieService.getMoviesByGenre(genreId).subscribe((data: any) => {
    this.loading = false;
    this.moviesByGenre.emit(data.results);
    });
  }
}
