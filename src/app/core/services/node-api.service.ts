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
        return this.http.post('http://localhost:3000/prime-numbers', range).pipe(map((data: any) => {
            return data;
        }));
    }

    getServicesHigherLimit(): Observable<any> {
        return this.http.get('http://localhost:3000/services-higher-limit').pipe(map((data: any) => {
            return data;
        }));
    }

    localityWithMoreServices(): Observable<any> {
        return this.http.get('http://localhost:3000/locality-with-more-services').pipe(map((data: any) => {
            return data;
        }));
    }

    getServiceWithGreaterCoverage(): Observable<any> {
        return this.http.get('http://localhost:3000/service-with-greater-coverage').pipe(map((data: any) => {
            return data;
        }));
    }

    // ------

    getServicesWithHigherLimitWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/services-with-higher-limit-with-params', data).pipe(map((data: any) => {
            return data;
        }));
    }

    getLocalityWithMoreServicesWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/locality-with-more-services-with-params', data).pipe(map((data: any) => {
            return data;
        }));
    }

    getServiceWithGreaterCoverageWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/service-with-greater-coverage-with-params', data).pipe(map((data: any) => {
            return data;
        }));
    }

};