import { routes } from './../../../app.routes';
 import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service'; 
 @Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movieDetails:any;
 
   constructor (private movieService:MovieService ,private routeravtivate: ActivatedRoute ,private router: Router){}
     ngOnInit():void{
      const id =Number(this.routeravtivate.snapshot.paramMap.get('id'));
      this.movieService.getMovieById(id).subscribe(data=> {
        this.movieDetails=data;
      })
      }
     
      goBackToList(){
        this.router.navigate(['/movie-list']);
       }
      
 }
