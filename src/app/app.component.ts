import { Component } from '@angular/core';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common'

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(){}
  title = 'Employee-Management';
  empId:string ='1234';
  dta:any;
  
}
