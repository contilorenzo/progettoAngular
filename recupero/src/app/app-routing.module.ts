import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'personalizza', loadChildren: () => import('./personalizza/personalizza.module').then(m => m.PersonalizzaModule) },
  { path: 'carrello', loadChildren: () => import('./carrello/carrello.module').then(m => m.CarrelloModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
