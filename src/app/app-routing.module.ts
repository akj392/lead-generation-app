import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadFormComponent, LeadListingComponent } from './lead';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lead',
    pathMatch: 'full'
  },
  {
    path: 'lead',
    component: LeadListingComponent
  },
  {
    path: 'lead/create',
    component: LeadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
