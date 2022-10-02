import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CanvasJSChart } from 'src/assets/canvasjs.angular.component';
import { NemoNamesComponent } from './nemo-names/nemo-names.component';
import { NemoPriceInformationComponent } from './nemo-price-information/nemo-price-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NemoNamesComponent,
    NemoPriceInformationComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
