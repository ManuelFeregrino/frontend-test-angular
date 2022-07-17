import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CharactersApiService {
    PUBLIC_KEY = '9bd267e0de3d835d8ebe8d435f119a15';
    HASH = '';
    URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

    constructor(private http: HttpClient) {}

    getAllCharacters(): Observable<any> {
        return this.http.get<any>(this.URL_API).pipe(map((data: any) => {
            return data.data.results.map((data: any) => {
                return {
                    name: data.name,
                    description: data.description,
                    thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
                    modified: data.modified,
                }
            });
        }));
    }

};