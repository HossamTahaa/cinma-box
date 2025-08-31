import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
 @Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
 constructor(private router :Router){}
 goToMovieList(){
  this.router.navigate(['movie-list'])
 }
goToFavPage(){
 this.router.navigate(['/favorites'])
}
}
