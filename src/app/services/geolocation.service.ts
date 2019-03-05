import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(public http: HttpClient) { }

  // Function to return array of queried places through Nominatim Services
  nominatimLLookup(q): Observable<any> {
    return this.http.get<any[]>(environment.NOMINATIM_URL, {
      params: {
        q: q,
        format: 'json'
      }
    });
  }
}


