import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: any[] = [];

  getFavorite() {
    return this.favorites;
  }

  addFavorite(movie: any) {
    if (!this.favorites.find((m) => m.id === movie.id)) {
      this.favorites.push(movie);
    }
  }
  remove(movieId: number) {
    this.favorites = this.favorites.filter((m) => m.id !== movieId);
  }
  isFavorite(movieId: number): boolean {
    return this.favorites.some((m) => m.id === movieId);
  }
}
