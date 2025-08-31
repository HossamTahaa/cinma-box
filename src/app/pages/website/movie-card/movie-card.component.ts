import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../../services/favorite-service';
 
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']  
})
export class MovieCardComponent {
  @Input() movies: any[] = [];
  @Output() movieClick = new EventEmitter<number>();
  constructor(private favService:FavoriteService){}

  onCardClick(id: number) {
    this.movieClick.emit(id);
  }
   
  toggleFavorite(movie:any){
    if(this.favService.isFavorite (movie.id)){
      this.favService.remove(movie.id);
    }else 
    {
      this.favService.addFavorite(movie);
    }
  }
    isFavorite(movie:any):boolean {
      return this.favService.isFavorite(movie.id)
    }
}
