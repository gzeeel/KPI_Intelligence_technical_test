import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';

import { RestService } from './_services/rest.service';
import { CookieService } from 'ngx-cookie-service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { ListComponent } from './list/list.component';
import { InvestmentComponent } from './investment/investment.component';
import { ChartsModule } from 'ng2-charts';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InvestmentComponent,
    GraphsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPfyAcs8ohvY_3cyrny3m7ujP2d5kz1NA'
    }),
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [
    CookieService,
    RestService,
    HttpUrlEncodingCodec
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
