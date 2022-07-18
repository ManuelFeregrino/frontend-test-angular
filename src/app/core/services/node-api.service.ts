import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NodeApiService {

    constructor(private http: HttpClient) {}

    calculatePrimeNumbers(range: any): Observable<any> {
        return this.http.post('http://localhost:3000/primeNumbers', range).pipe(map((data: any) => {
            return data;
        }));
    }

};