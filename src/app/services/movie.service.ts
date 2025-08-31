import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject,switchMap } from 'rxjs';
import { Constant } from './constant/constant';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
   private currPageSubject= new BehaviorSubject<number>(1);
   private perPage: number = 12; // Show only 12 movies per page

   constructor(private http :HttpClient){}

   getMoiveStream():Observable<any> {
    return this.currPageSubject.pipe(
      switchMap((page)=> 
        this.http.get(Constant.METHODS.getPopularMovies(page, this.perPage))
      )
    )
   }

   nextPage(){
    this.currPageSubject.next(this.currPageSubject.value+1);
   } 
    
   prevPage(){
     const current=this.currPageSubject.value;
     if(current>1){
      this.currPageSubject.next(current-1);
     }
   }
   
     getMovieById(id:number):Observable<any>{
      return this.http.get(Constant.METHODS.getMovieDetails(id))
     }
       
     searchMovies(query:string, page: number=1):Observable<any>{          
         return this.http.get( Constant.METHODS.searchMovies(query,page, this.perPage));
     }

     getGenre() :Observable <any>{
        return this.http.get(Constant.METHODS.getGenres())
     }

     getMoviesByGenre(genreId:string , page:number=1) :Observable<any>{
      return this.http.get(Constant.METHODS.getMoviesByGenre(genreId,page, this.perPage))
     }

     // Method to change page size if needed
     setPageSize(size: number) {
       this.perPage = size;
     }
}
  
 