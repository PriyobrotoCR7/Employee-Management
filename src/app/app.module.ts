import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddOnPageComponent } from './add-on-page/add-on-page.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsComponent,
    LogInComponent,
    AddOnPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,MatToolbarModule
  ],
  exports:[
    DetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
