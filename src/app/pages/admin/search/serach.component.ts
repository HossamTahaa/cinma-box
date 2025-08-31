  import { Component,Output,EventEmitter } from '@angular/core';
  import { MovieService } from '../../../services/movie.service';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { Observable, Subject, switchMap } from 'rxjs';
  import { debounceTime ,distinctUntilChanged } from 'rxjs/operators';
  import { LoadingComponent } from '../loading/loading.component';
 

  @Component({
    selector: 'app-serach',
    standalone: true,
    imports: [CommonModule, FormsModule, LoadingComponent],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
  })
  export class SearchComponent {
    private searchQuery= new Subject<string>();

        movies:any[]= [];
        searchText:string='';
         isLoading = false;  

     @Output() serachResult = new EventEmitter<any[]>();

     constructor(private movieService:MovieService){}
    
     ngOnInit():void {
      this.searchQuery.pipe(
        debounceTime(500),
       // distinctUntilChanged(),
        switchMap((query)=>this.handleSearch(query))
      ).subscribe((data=> {
        this.movies =data.results;
        this.serachResult.emit(data.results);
        this.isLoading=false;
      }))
    }
    
    handleSearch(query: string): Observable<any> {
    return query.trim() === ''
      ? this.movieService.getMoiveStream()
      : this.movieService.searchMovies(query);
  }

      //to send for parent  
     search(){
      this.isLoading=true;
       this.searchQuery.next(this.searchText)
     }
  }