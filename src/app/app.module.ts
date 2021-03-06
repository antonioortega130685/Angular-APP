import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';

// bootstrap module
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Own components
import { LandingComponent } from './landing/landing.component';
import { PlaceComponent } from './place/place.component';
// leaflet asymetik
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// own components
import { GeolocationService } from './services/geolocation.service';
import { FormComponent } from './form/form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Angular Data Tables
import { DataTablesModule } from 'angular-datatables';
// Charts module
import { ChartsComponent } from './charts/charts.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LandingComponent,
    PlaceComponent,
    FormComponent,
    DatatableComponent,
    PageNotFoundComponent,
    ChartsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient inyection
    HttpClientModule,
    // ng Bootstrap
    NgbModule,
    // leaflet
    LeafletModule.forRoot(),
    // Angular Data Tables
    DataTablesModule

  ],
  providers: [
    GeolocationService
  ],
  bootstrap: [AppComponent],
  exports: [SiteComponent, LandingComponent, PlaceComponent, FormComponent, DatatableComponent, PageNotFoundComponent, ChartsComponent, AuthComponent]
})
export class AppModule { }
