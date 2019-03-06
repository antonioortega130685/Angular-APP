import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  constructor(private http: HttpClient) { }

  getCountryPopulation(q): Observable<any>{
    return this.http.get('http://api.population.io:80/1.0/wp-rank/1920-01-01/unisex/' + q + '/today/');
  }
}
