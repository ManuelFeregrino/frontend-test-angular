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

    getServicesHigherLimit(): Observable<any> {
        return this.http.get('http://localhost:3000/servicesHigherLimit').pipe(map((data: any) => {
            return data;
        }));
    }

    localityWithMoreServices(): Observable<any> {
        return this.http.get('http://localhost:3000/localityWithMoreServices').pipe(map((data: any) => {
            return data;
        }));
    }

    getServiceWithGreaterCoverage(): Observable<any> {
        return this.http.get('http://localhost:3000/serviceWithGreaterCoverage').pipe(map((data: any) => {
            return data;
        }));
    }

    // ------

    getServicesWithHigherLimitWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/servicesWithHigherLimitWithParams', data).pipe(map((data: any) => {
            return data;
        }));
    }

    getLocalityWithMoreServicesWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/localityWithMoreServicesWithParams', data).pipe(map((data: any) => {
            return data;
        }));
    }

    getServiceWithGreaterCoverageWithParams(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/serviceWithGreaterCoverageWithParams', data).pipe(map((data: any) => {
            return data;
        }));
    }

};