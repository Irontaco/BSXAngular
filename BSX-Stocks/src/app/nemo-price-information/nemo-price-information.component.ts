import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StockHistory } from '../model/stock-history';
import { CanvasJS } from 'src/assets/canvasjs.angular.component';
import { NemosService } from '../nemos.service';

@Component({
  selector: 'app-nemo-price-information',
  templateUrl: './nemo-price-information.component.html',
  styleUrls: ['./nemo-price-information.component.css']
})

export class NemoPriceInformationComponent implements OnChanges, OnInit {

  CurrentlySelectedNemoPriceInfo : StockHistory | any;
  chart : any;

  //This defines how we update the chart and table.
  @Input() receivedNemo:string = "SPY";

  constructor(private nemoService: NemosService, private router: Router,) { 
  }

  ngOnInit(){
    //Initialize chart space...
    this.chart = new CanvasJS.Chart("chartContainer");
    this.chart.render();

  }

  //Refreshes table and charts when the value of receivedNemo changes.
  ngOnChanges(changes: SimpleChanges): void {

    this.refreshNemoPriceInfoView();
  }

  //Refreshes view.
  public async refreshNemoPriceInfoView(){

    this.CurrentlySelectedNemoPriceInfo = await this.getNemoPriceInfo(this.receivedNemo);
    
    this.BuildChartData();
    
  }

  //Gets a specific NemoPriceInfo entry from the REST API.
  public getNemoPriceInfo(symbol : string):Promise<StockHistory>{

    let result: StockHistory;

    return new Promise(resolve =>{

      //If our vars haven't initialized, just search for the first index.
      if(symbol === undefined){ symbol = "SPY"; this.receivedNemo = "SPY"; }
      this.nemoService.filterNemoPriceInfo(symbol).subscribe( data => {

        result = new StockHistory(data.symbol, data.historical);
        resolve(result);
      });

      setTimeout(() => {
      }, 200);
      
    })
  }

  //Builds chart and fills it in with the data from our previous JSON REST response.
  public async BuildChartData(){
    
    if(this.chart === undefined){
      return;
    }

    this.chart.options = {
      theme: "dark2",
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "GRÁFICO DE PRECIOS - " + this.CurrentlySelectedNemoPriceInfo.symbol,
        fontSize: 32
      },
      data: [{
        type: "line",
        dataPoints: []
      }],
      axisX:{
        labelFontSize: 14
      },
      axisY:{
        labelFontSize: 14
      },
    };

    //Adapts data for displaying within the chart.
    for(var i=0; i < this.CurrentlySelectedNemoPriceInfo.historicalPrices.length; i++){
      this.chart.options.data[0].dataPoints.push(
        {x: new Date(this.CurrentlySelectedNemoPriceInfo.historicalPrices[i].date),
         y: this.CurrentlySelectedNemoPriceInfo.historicalPrices[i].close}
      );
    }

    this.chart.render();
  }

}


