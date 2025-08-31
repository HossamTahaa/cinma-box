import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MovieListComponent } from './pages/admin/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/website/movie-details/movie-details.component';
import { FavoriteComponent } from './pages/website/favorite/favorite.component';
export const routes: Routes = [
 {
  path:'',
  redirectTo:'login',
  pathMatch:'full'
 },
 {
  path:'login',
  component:LoginComponent
 },
 {
   path:'',
   component:LayoutComponent,
   children:[
    {
     path:'movie-list',
     component:MovieListComponent
    },
    {
      path:'movie-details/:id',
      component:MovieDetailsComponent
    },
    {
      path:'favorites',component:FavoriteComponent
    }
   ]
 },
 
];