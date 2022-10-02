import { Component, Output, EventEmitter } from '@angular/core';
import { NemosService } from './nemos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  //This acts as an intermediary for receiving data from nemo-names and sending it to
  //nemo-price-information. It's just a relay for the nemo.

  constructor(private nemoService: NemosService, private router: Router) {}
  nemoIn!:string;

  @Output() nemoHistoryOut:EventEmitter<string> = new EventEmitter();

  title = 'ABBI-Products';

  //Relays the nemo to app-nemo-price-information
  public RedirectNemoToProductHistory(data:any){
    this.nemoIn = data;
    this.nemoHistoryOut.emit(this.nemoIn);
  }


}
