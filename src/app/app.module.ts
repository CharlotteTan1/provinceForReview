import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProvinceAutocompleteComponent } from './province-autocomplete/province-autocomplete.component';
import { TownComponent } from './town/town.component';
import { ProvinceService } from './address.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
@NgModule({
  declarations: [
    AppComponent,
    ProvinceAutocompleteComponent,
    TownComponent,
    HomeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [ProvinceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
