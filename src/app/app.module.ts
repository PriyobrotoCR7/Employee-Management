import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddOnPageComponent } from './add-on-page/add-on-page.component';


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
    AppRoutingModule,
  ],
  exports:[
    DetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
