import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

enum EndpointEnums {
  backendUrl = "http://inquiryiq-be.us-east-1.elasticbeanstalk.com"
} 

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}

  getRelatedQuestions(): Observable<any> {
    let url = `${EndpointEnums.backendUrl}/api/related-question`;
    return this.http.get(url);
  }
}
