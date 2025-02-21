// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  
@Injectable({
  providedIn: 'root'  
})
export class ApiService {

  constructor() { }

  getMessage(): Observable<string> {
    return of('Hello from the API service!');
  }
}
