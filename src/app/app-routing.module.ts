import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'me', component: HomeComponent },
    { path: '404', component: LostComponent },
    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
