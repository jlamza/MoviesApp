import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesInfoComponent } from './movies/movies-info/movies-info.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { AuthModGuard } from './_guards/auth-mod.guard';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info/:id', component: MoviesInfoComponent },
  { path: 'edit/:id', component: MoviesEditComponent, canActivate: [AuthModGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'add', component: MoviesAddComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
