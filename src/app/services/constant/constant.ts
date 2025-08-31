 
 export const Constant = {
  API_KEY: 'ff6d58b2f3dc7643056dc6ac023d3948',
   METHODS: {
    getPopularMovies: (page: number = 1, perPage: number = 12) =>
      `https://api.themoviedb.org/3/movie/popular?api_key=ff6d58b2f3dc7643056dc6ac023d3948&language=en-US&page=${page}&per_page=${perPage}`,

    getMovieDetails(id: number): string {
      return `https://api.themoviedb.org/3/movie/${id}?api_key=${Constant.API_KEY}&language=en-US`;
    },
    searchMovies(query: string, page: number = 1, perPage: number = 12): string {
      return `https://api.themoviedb.org/3/search/movie?api_key=${Constant.API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;
    },
     
     getGenres():string {
      return `https://api.themoviedb.org/3/genre/movie/list?api_key=${Constant.API_KEY}`
     },
     getMoviesByGenre: (genreId: string, page: number = 1, perPage: number = 12) =>
      `https://api.themoviedb.org/3/discover/movie?api_key=${Constant.API_KEY}&with_genres=${genreId}&page=${page}&language=en-US&per_page=${perPage}`
   }
}
 