import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
//import { MatMomentDateModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BookingService } from './reservation/services/booking.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //MatMomentDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule
  ],
  providers: [
    BookingService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }