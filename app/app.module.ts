import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import { passengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'

import { AppComponent } from "./app.component";


@NgModule({

  declarations:[
    AppComponent,
  ],

  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    //custom modules
    passengerDashboardModule

  ],

  bootstrap:[AppComponent]


})

export class AppModule {}