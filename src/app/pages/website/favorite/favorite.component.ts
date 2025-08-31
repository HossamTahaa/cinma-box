import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../../services/favorite-service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  favorites: any[] = [];

  constructor(private favService: FavoriteService) {}
  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favService.getFavorite();
  }

  remove(movieId: number) {
    this.favService.remove(movieId);
    this.loadFavorites();
  }
}
