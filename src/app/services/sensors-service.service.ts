import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from '../home/models/sensors';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  constructor(private _httpClient: HttpClient) {}

  getSensors(): Observable<{ components: Sensor[] }> {
    return this._httpClient.get<{ components: Sensor[] }>(
      'assets/data/sensors.json'
    );
  }
}
