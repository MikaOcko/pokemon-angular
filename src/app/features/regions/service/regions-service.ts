import { inject, Service, signal, Injectable } from '@angular/core';
import { Region } from '../types/region.type';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from '../../../shared/types/api-response.types';

@Injectable({
  providedIn: 'root',
})

export class RegionsService {
    private readonly http = inject(HttpClient);
    private regions = signal<Region[]>([]);
    readonly url = 'https://pokeapi.co/api/v2/region/';
    readonly regionSignal = this.regions.asReadonly();

    // logique pour récupérer toutes les régions
    getRegions():Observable<ApiResponse<Region[]>> {
        return this.http
        .get<ApiResponse<Region[]>>(this.url)
        .pipe(
            tap((response:ApiResponse<Region[]>) => this.regions.set(response.results))
        );
    }
}
