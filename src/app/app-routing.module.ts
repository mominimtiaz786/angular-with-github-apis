import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* The routes of the app are added here
Mentioning which path links to which Component */
const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'details', loadChildren: () => import('./details-module/details-module.module').then(m => m.DetailsModuleModule) },
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  
  // {path:  'detail/:id', component:  HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
