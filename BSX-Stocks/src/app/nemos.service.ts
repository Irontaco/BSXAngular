import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NemosService {

  public symbolService = "http://localhost:9090/api/symbols";
  public historyService = "http://localhost:9090/api/historical";

  constructor(private httpClient: HttpClient) { }

  public getNemos(): Observable<any>{
    return this.httpClient.get(this.symbolService);
  }

  public filterNemos(searchTerm : string): Observable<any>{
    return this.httpClient.get(this.symbolService + "/" + searchTerm)
  }
  
  public getNemoPriceInfo(): Observable<any>{
    return this.httpClient.get(this.historyService);
  }

  public filterNemoPriceInfo(searchTerm : string): Observable<any>{
    return this.httpClient.get(this.historyService + "/" + searchTerm)
  }

}
