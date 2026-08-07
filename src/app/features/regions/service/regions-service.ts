import { inject, Service, signal } from '@angular/core';
import { Region } from '../types/region.type';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Service()
export class RegionsService {
    private http = inject(HttpClient);
    private regions = signal<Region[]>([]);
    readonly url = 'https://pokeapi.co/api/v2/region/';

    // logique pour récupérer toutes les régions
    getRegions():Observable<Region[]> {
        return this.http.get<Region[]>(this.url).pipe(
            tap(regions => this.regions.set(regions))
        );
    }
}
