import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class DigitransitService {
  baseUrl ="https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
  constructor(private http: HttpClient) { }
  getRoutes(name:string){
    // set the headers like this, otherwise the headers can't be set
    const headers = new HttpHeaders().set('Content-Type','application/graphql');
    const body = `{
      stops(name: "${name}") {
        name
          patterns {
            name
            route {
              gtfsId
              shortName
              longName
            }
            directionId
          }
      }
    }`;
    interface StopData{
      stops: string[];
    }
    interface ResponseData {
      data: StopData;
    }
    return this.http.post<ResponseData>(this.baseUrl, body, {headers: headers});
  }

}
