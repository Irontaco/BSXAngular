import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NemoPriceInformationComponent } from './nemo-price-information/nemo-price-information.component';
import { NemoNamesComponent } from './nemo-names/nemo-names.component';

const routes: Routes = [
  {
    path: 'productlist', 
    component: NemoNamesComponent,
    outlet:'productlist'},
  {
    path: 'producthistory', 
    component: NemoPriceInformationComponent,
    outlet:'producthistory'
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
