import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Studio } from '../models/studios';

@Injectable()
export class StudioService {

  private baseUrl = 'http://localhost:8080/MovieServiceWebApp/resources/studios';
  
  constructor(private http: Http) {}

  getStudios(): Promise<Studio[]> {

    let username:string = 'writer';
    let password:string = '123';

    let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
		contentHeaders.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.get(this.baseUrl, {headers: contentHeaders})
      .toPromise()
      .then(response => response.json() as Studio[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO: Checken obs überhaupt eine Connection gibt..
    return Promise.reject(error.message || error);
  }

} 