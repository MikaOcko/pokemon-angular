import { Component, inject, OnInit, signal } from '@angular/core';
import { RegionsService } from '../service/regions-service';
import { InfosResponse } from '../../../shared/types/api-response.types';

@Component({
  selector: 'app-regions',
  imports: [],
  templateUrl: './regions.html',
})
export class Regions implements OnInit {
  private regionService = inject(RegionsService);
  readonly regions = this.regionService.regionSignal;
  readonly infos = signal<InfosResponse>({} as InfosResponse);

  ngOnInit() {
    this.regionService.getRegions().subscribe();
  }

}
