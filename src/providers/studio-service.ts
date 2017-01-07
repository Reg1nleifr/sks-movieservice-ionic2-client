import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Studio } from '../models/studios';

@Injectable()
export class StudioService {
  private baseUrl = 'http://localhost:8080/MovieServiceWebApp/resources/studios';
  private headers = new Headers([
    { 'Content-Type': 'application/json' }]
  );

  constructor(private http: Http) { }

  getStudios(): Promise<Studio[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json() as Studio[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO: Checken obs überhaupt eine Connection gibt..
    return Promise.reject(error.message || error);
  }

} 