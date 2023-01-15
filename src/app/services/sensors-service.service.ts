import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { saveAs } from 'file-saver';

import { Sensor } from '../home/models/sensors';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  private _url: string = 'assets/data/sensors.json';

  constructor(private _httpClient: HttpClient) {}

  getSensors(): Observable<{ components: Sensor[] }> {
    return this._httpClient.get<{ components: Sensor[] }>(this._url);
  }

  saveImg(file: File) {
    return saveAs(file, file.name);
  }
}
