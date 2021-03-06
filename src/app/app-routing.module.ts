import { ChartsComponent } from './charts/charts.component';
import { FormComponent } from './form/form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SiteComponent } from './site/site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlaceComponent } from './place/place.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', component: SiteComponent, children: [
    { path: 'landing', component: LandingComponent },
    { path: 'place', component: PlaceComponent },
    { path: 'datatable', component: DatatableComponent },
    { path: 'form', component: FormComponent },
    { path: 'charts', component: ChartsComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
