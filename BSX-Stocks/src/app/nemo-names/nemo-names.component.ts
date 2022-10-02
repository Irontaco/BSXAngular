import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../model/stock';
import { NemosService } from '../nemos.service';

@Component({
  selector: 'app-nemo-names',
  templateUrl: './nemo-names.component.html',
  styleUrls: ['./nemo-names.component.css']
})
export class NemoNamesComponent implements OnInit{
  
  nemos: Stock[] = [];

  @Output() nemoOut:EventEmitter<string> = new EventEmitter();

  constructor(private nemoService: NemosService, private router: Router,) { }
  
  ngOnInit(){
    this.getNemoList();
  }

  //Sends out the nemo selected towards appcomponent...
  public sendNemoFilter(selectedNemo: any){
    this.nemoOut.emit(selectedNemo);
  }

  //Gets all the products from the REST API to populate the list.
  public getNemoList(){
    this.nemoService.getNemos().subscribe(data => {
      this.nemos = data.symbolsList;
    })
  }

}

